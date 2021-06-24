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
        >
          {/* <Avatar
            className="notAuth"
            onClick={() => {
              onPresentConnectModal();
            }}
          >
            Connect
          </Avatar> */}
        </AccountBlock>
      )}
    </>
  );
};

const AccountBlock = styled(Text)`
  position: relative;
  display: flex;
  min-height: 43px;
  min-width: 160px;
  align-items: center;
  padding: 12px 56px 12px 20px;
  background: ${({ theme }) => theme.colors.bgOpacity};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  text-shadow: ${({ theme }) => theme.colors.textShadow};
  cursor: pointer;
  border: none;
`;
const Avatar = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  right: 2px;
  &.notAuth {
    width: calc(100% - 4px);
  }
`;

export default Account;
