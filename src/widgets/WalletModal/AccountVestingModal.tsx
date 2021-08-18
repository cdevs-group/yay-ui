import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Box/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import styled from "styled-components";
import { Button as Input } from "./ConnectModal";
import { connectorLocalStorageKey } from "./config";
import { TextsAccount } from "./useWalletModal";
import { ArrowDownRightIcon, CopyIcon2 } from "../../components/Svg";
import { Tabs } from "../../components/Tabs";

interface Props {
  account: string;
  logout: () => void;
  onDismiss?: () => void;
  texts: TextsAccount;
  yayBalance?: string | number;
  dataTransactions?: Array<any>;
  handleClaimed: (value: string) => void;
}

const AccountVestingModal: React.FC<Props> = ({
  texts,
  account,
  logout,
  yayBalance,
  dataTransactions,
  handleClaimed = () => null,
  onDismiss = () => null,
}) => {
  const [tabValue, setTabValue] = useState<number>(0);

  const handleTab = async (e: any) => {
    setTabValue(+e.target.value);
  };

  return (
    <Modal title={texts.title} onDismiss={onDismiss}>
      <ModalWrap>
        <Tabs tabsList={texts.tabs} tabValue={tabValue} onClick={handleTab} />
        {tabValue === 0 && (
          <>
            <Text
              letterSpacing="-0.02em"
              color="textGray"
              marginBottom="7px"
              fontSize="14px"
              lineHeight="24px"
              marginTop="37px"
              fontWeight="400"
            >
              {texts.address}
            </Text>
            <Text
              bold
              style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
            >
              <AccountWrap as="div">
                <AccountText fontWeight={500} color="text">
                  {account}
                </AccountText>
                <CopyText color="#47DA3B">
                  <CopyToClipboard toCopy={account} textCopied={texts.copied} icon={<CopyIcon2 />} left="auto" />
                </CopyText>
              </AccountWrap>
            </Text>
            <Flex alignItems="center" justifyContent="space-between" mb="30px">
              <Text letterSpacing="-0.02em" color="textGray" fontWeight="400">
                {texts.yayBalance}
              </Text>
              <Text letterSpacing="-0.02em" fontWeight="400">
                {yayBalance}
              </Text>
            </Flex>
            <Flex mb="30px">
              <LinkExternal
                color="#47DA3B"
                small
                href={`https://bscscan.com/address/${account}`}
                mr="16px"
                icon={<ArrowDownRightIcon style={{ marginLeft: 5 }} />}
                style={{ fontWeight: 400 }}
              >
                {texts.view}
              </LinkExternal>
            </Flex>

            <Flex justifyContent="center">
              <Button
                scale="md"
                width="100%"
                variant="secondary"
                style={{ fontWeight: 400 }}
                onClick={() => {
                  logout();
                  window.localStorage.removeItem(connectorLocalStorageKey);
                  onDismiss();
                }}
              >
                {texts.button}
              </Button>
            </Flex>
          </>
        )}
        {tabValue === 1 && (
          <>
            <Text
              letterSpacing="-0.02em"
              color="textGray"
              marginBottom="21px"
              fontSize="14px"
              lineHeight="24px"
              marginTop="26px"
              fontWeight={400}
            >
              {texts.recentTransactions}
            </Text>
            {dataTransactions?.length ? (
              <Table>
                {dataTransactions?.map((el, i) => (
                  <React.Fragment key={`${el.id}-${i}`}>
                    <StyledText>{el.id}</StyledText>
                    <ButtonClaimed onClick={() => handleClaimed(el.id)}>
                      {texts.claimed}
                      <ArrowDownRightIcon stroke="#fff" style={{ marginLeft: 5 }} width="8px" />
                    </ButtonClaimed>
                    <StyledText color="green">{el.value}</StyledText>
                  </React.Fragment>
                ))}
              </Table>
            ) : (
              <Text fontSize="13px" letterSpacing="0.05em" textAlign="center" padding="16px 0">
                {texts.noRecentTransactions}
              </Text>
            )}
          </>
        )}
      </ModalWrap>
    </Modal>
  );
};

export default AccountVestingModal;

const ModalWrap = styled.div`
  padding: 0 20px 20px;
  min-height: 380px;
  margin-top: -10px;
`;
const AccountWrap = styled(Input)`
  position: relative;
  padding: 13px 15px;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 13px 20px;
  }
`;
const CopyText = styled(Text)`
  padding-left: 10px;
  margin-left: auto;
  box-shadow: -10px 0px 10px ${({ theme }) => theme.colors.darkGreyBg};
`;

const AccountText = styled(Text)`
  font-size: 13px;
  max-width: 226px;
  overflow: hidden;
  ${({ theme }) => theme.mediaQueries.xs} {
    max-width: 250px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 300px;
  }
`;

const Table = styled.div`
  display: grid;
  grid-template-columns: 10% 35% 44%;
  grid-gap: 32px 20px;
  align-items: center;
`;

const ButtonClaimed = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 15px;
  border-radius: 7px;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.5px;
  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  cursor: pointer;
`;

const StyledText = styled(Text)`
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.05em;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 15px;
    line-height: 19px;
  }
`;
