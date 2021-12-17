import React, { useState } from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import { Login } from "../../WalletModal/types";
import { TextsConnect } from "../../WalletModal/useWalletModal";
import { BlockChainNetwork, Funds, TextsAccountMarketplace } from "../types";
import { useModal } from "../../Modal";
import ConnectModal from "../../WalletModal/ConnectModal";
import { Button, CollectionIcon, FavoritesIcon, Flex, UserIcon, WalletIcon } from "../../..";
import DropdownLayout from "../../../components/DropDown/DropDown";
import { ellipsis } from "../../../helpers/ellipsis";
import { CopyToClipboard } from "../../../components/CopyToClipboard";
import { LabelTop } from "../../../components/LabelTop";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  textsConnect: TextsConnect;
  textsAccount: TextsAccountMarketplace;
  hrefLearnHow?: string;
  network?: BlockChainNetwork;
  totalBalance: string;
  funds: Funds[];
}

const AccountMarketplace: React.FC<Props> = ({
  account,
  login,
  logout,
  textsAccount,
  textsConnect,
  hrefLearnHow,
  network,
  totalBalance,
  funds,
}) => {
  const [onPresentConnectModal] = useModal(
    <ConnectModal texts={textsConnect} login={login} hrefLearnHow={hrefLearnHow} network={network} />
  );
  const [open, setOpen] = useState<boolean>(false);

  const links = [
    {
      icon: <UserIcon />,
      text: textsAccount.myProfile,
      link: textsAccount.linkMyProfile,
    },
    {
      icon: <FavoritesIcon />,
      text: textsAccount.favorities,
      link: textsAccount.linkFavorities,
    },
    {
      icon: <CollectionIcon />,
      text: textsAccount.myCollections,
      link: textsAccount.linkMyCollections,
    },
  ];

  return (
    <>
      {account ? (
        <DropdownLayout
          open={open}
          setOpen={setOpen}
          icon={
            <Wrapper>
              <WalletIcon />
            </Wrapper>
          }
          variant="center-behind"
        >
          <Dropdown>
            <Flex justifyContent="space-between" alignItems="center" mb="14px">
              <StyledText fontSize="21px">{textsAccount.title}</StyledText>
              <AccountBlock>
                <CopyToClipboard
                  toCopy={account}
                  textCopied={textsAccount.copied}
                  propsIcon={{ stroke: "#fff", marginLeft: 14 }}
                >
                  {ellipsis(account)}
                </CopyToClipboard>
              </AccountBlock>
            </Flex>
            <Flex justifyContent="space-between" mb="20px">
              <Text fontWeight={400}>{textsAccount.totalBalance}</Text>
              <Text color="textGray" fontWeight={400}>
                {totalBalance}
              </Text>
            </Flex>
            {funds?.length && (
              <>
                <StyledText fontSize="21px" mb="20px">
                  {textsAccount.myFunds}
                </StyledText>
                {funds?.map((el) => (
                  <Flex key={el.currencyName} justifyContent="space-between" alignItems="center" mb="20px">
                    <Flex alignItems="center">
                      <img alt="" src={el.icon} style={{ marginRight: 12, width: 37, height: 37 }} />
                      <div>
                        <Text mb="4px" lineHeight="19px" fontWeight={400}>
                          {el.currencyName}
                        </Text>
                        <Text fontSize="13px" lineHeight="16px" color="textGray" fontWeight={400}>
                          {el.currencyFullName}
                        </Text>
                      </div>
                    </Flex>
                    <div>
                      <Text mb="4px" textAlign="right" lineHeight="19px" fontWeight={400}>
                        {el.balance}
                      </Text>
                      <Text fontSize="13px" lineHeight="16px" color="textGray" textAlign="right" fontWeight={400}>
                        {el.balanceDollars}
                      </Text>
                    </div>
                  </Flex>
                ))}
              </>
            )}
            <Line />
            {links.map((el) => (
              // <a href={el.link}>
              <LabelTop label={textsAccount.comingSoon} mb="19px" key={el.text}>
                <Flex alignItems="center">
                  {el.icon}
                  <div style={{ marginLeft: 11 }}>{el.text}</div>
                </Flex>
              </LabelTop>
              // </a>
            ))}
            <Button variant="option" onClick={() => logout()} mt="19px">
              {textsAccount.disconnect}
            </Button>
          </Dropdown>
        </DropdownLayout>
      ) : (
        <Wrapper
          as="button"
          onClick={() => {
            onPresentConnectModal();
          }}
          notAuth
        >
          <WalletIcon />
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div<{ notAuth?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-right: 6px;
  background: ${({ theme, notAuth }) => (notAuth ? theme.colors.whiteRgba : theme.colors.bgOpacity)};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-radius: 7px;
  border: none;
  cursor: pointer;
  order: -1;
  & path {
    fill: ${({ theme, notAuth }) => (notAuth ? theme.colors.text : theme.colors.green)};
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    width: 40px;
    height: 40px;
    margin-right: 9px;
    margin-left: 9px;
    border-radius: 9px;
    order: 0;
  }
`;

const AccountBlock = styled(Text)`
  position: relative;
  display: flex;
  min-height: 30px;
  height: 100%;
  min-width: 120px;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  line-height: 14px;
  padding: 0 20px;
  background: ${({ theme }) => theme.colors.bgOpacity};
  border-radius: 7px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  cursor: pointer;
  border: none;
  ${({ theme }) => theme.mediaQueries.xl} {
    min-height: 40px;
    min-width: 160px;
    font-size: 15px;
    line-height: 19px;
    padding: 0 20px;
    border-radius: 12px;
  }
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: ${({ theme }) => theme.colors.darkGradient6};
  box-shadow: inset 0px 2px 20px rgba(0, 0, 0, 0.25);
  border-radius: 0 0 9px 9px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 33px;
  }
`;

const StyledText = styled(Text)`
  text-shadow: ${({ theme }) => theme.colors.textShadow};
  font-weight: 400;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 28px;
  margin-top: 9px;
  opacity: 0.5;
  background: ${({ theme }) => theme.colors.bgCard};
`;

export default AccountMarketplace;
