import React, { useState } from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import { Login } from "../../WalletModal/types";
import { TextsConnect, TextsAccount } from "../../WalletModal/useWalletModal";
import { BlockChainNetwork } from "../types";
import { useModal } from "../../Modal";
import ConnectModal from "../../WalletModal/ConnectModal";
import { AccountIcon, Flex, WalletIcon } from "../../..";
import DropdownLayout from "../../../components/DropDown/DropDown";
import { ellipsis } from "../../../helpers/ellipsis";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  textsConnect: TextsConnect;
  textsAccount: TextsAccount;
  hrefLearnHow?: string;
  network?: BlockChainNetwork;
}

const AccountMarketplace: React.FC<Props> = ({
  account,
  login,
  logout,
  textsAccount,
  textsConnect,
  hrefLearnHow,
  network,
}) => {
  const [onPresentConnectModal] = useModal(
    <ConnectModal texts={textsConnect} login={login} hrefLearnHow={hrefLearnHow} network={network} />
  );
  const [open, setOpen] = useState<boolean>(false);

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
            <Flex justifyContent="space-between" alignItems="center">
              <Text>{textsAccount.title}</Text>
              <AccountBlock as="button">
                {ellipsis(account)}
                <Avatar>
                  <img src={AccountIcon} />
                </Avatar>
              </AccountBlock>
            </Flex>
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
  justify-content: center;
  margin-right: 6px;
  font-size: 11px;
  line-height: 14px;
  padding: 0 26px 0 10px;
  background: ${({ theme }) => theme.colors.bgOpacity};
  border-radius: 7px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  cursor: pointer;
  border: none;
  order: -1;
  &.notAuth {
    background: ${({ theme }) => theme.colors.green};
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    min-height: 40px;
    min-width: 160px;
    margin-right: 11px;
    font-size: 15px;
    line-height: 19px;
    padding: 0 56px 0 20px;
    border-radius: 12px;
    order: 0;
  }
`;
const Avatar = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  right: 2px;
  top: 50%;
  transform: translateY(-50%);
  & img {
    width: 26px;
    height: 26px;
  }
  &.notAuth {
    width: calc(100% - 4px);
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    right: 4px;
    & img {
      width: 32px;
      height: 32px;
    }
  }
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  padding: 11px 16px;
  background: ${({ theme }) => theme.colors.darkGradient6};
  box-shadow: inset 0px 2px 20px rgba(0, 0, 0, 0.25);
  border-radius: 0 0 9px 9px;
`;

export default AccountMarketplace;
