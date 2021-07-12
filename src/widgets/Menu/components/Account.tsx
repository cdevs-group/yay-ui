import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import truncateWalletAddress from "../../../helpers/truncateWalletAddress";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";
import { AccountIcon } from "../../../constants/images";
import { TextsConnect, TextsAccount } from "../../WalletModal/useWalletModal";

interface Props {
  account?: string;
  login: Login;
  text: string;
  logout: () => void;
  textsConnect: TextsConnect;
  textsAccount: TextsAccount;
}

const Account: React.FC<Props> = ({ text, account, login, logout, textsAccount, textsConnect }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    login,
    logout,
    textsAccount,
    textsConnect,
    account
  );

  return (
    <>
      {account ? (
        <AccountBlock
          as="button"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {truncateWalletAddress(account)}
          <Avatar>
            <img src={AccountIcon} />
          </Avatar>
        </AccountBlock>
      ) : (
        <AccountBlock
          as="button"
          onClick={() => {
            onPresentConnectModal();
          }}
          className="notAuth"
        >
          <Avatar className="notAuth">{text}</Avatar>
        </AccountBlock>
      )}
    </>
  );
};

const AccountBlock = styled(Text)`
  position: relative;
  display: flex;
  min-height: 30px;
  height: 100%;
  min-width: 120px;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  line-height: 14px;
  padding: 0 26px 0 10px;
  background: ${({ theme }) => theme.colors.bgOpacity};
  border-radius: 7px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  cursor: pointer;
  border: none;
  &.notAuth {
    background: ${({ theme }) => theme.colors.green};
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    min-height: 40px;
    min-width: 160px;
    font-size: 15px;
    line-height: 19px;
    padding: 0 56px 0 20px;
    border-radius: 12px;
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
  ${({ theme }) => theme.mediaQueries.lg} {
    right: 4px;
    & img {
      width: 32px;
      height: 32px;
    }
  }
`;

export default Account;
