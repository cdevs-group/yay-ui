import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import truncateWalletAddress from "../../../helpers/truncateWalletAddress";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";
import { AccountIcon } from "../../../constants/images";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const Account: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);

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
          <Avatar className="notAuth">Connect</Avatar>
        </AccountBlock>
      )}
    </>
  );
};

const AccountBlock = styled(Text)`
  position: relative;
  display: flex;
  height: 30px;
  min-width: 120px;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  line-height: 14px;
  padding: 12px 26px 12px 10px;
  background: ${({ theme }) => theme.colors.bgOpacity};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  text-shadow: ${({ theme }) => theme.colors.textShadow};
  cursor: pointer;
  border: none;
  &.notAuth {
    background: ${({ theme }) => theme.colors.green};
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    min-height: 41px;
    min-width: 160px;
    font-size: 15px;
    line-height: 19px;
    padding: 12px 56px 12px 20px;
  }
`;
const Avatar = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  right: 4px;
  &.notAuth {
    width: calc(100% - 4px);
  }
  & img {
    width: 80%;
    ${({ theme }) => theme.mediaQueries.lg} {
      width: 100%;
    }
  }
`;

export default Account;
