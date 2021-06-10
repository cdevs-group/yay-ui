import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Box/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import styled from "styled-components";
import { Button as Input } from './ConnectModal'

interface Props {
  account: string;
  logout: () => void;
  onDismiss?: () => void;
}

const AccountModal: React.FC<Props> = ({ account, logout, onDismiss = () => null }) => (
  <Modal title="Your wallet" onDismiss={onDismiss}>
    <ModalWrap>
    <Text
      bold
      style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
    >
      <AccountWrap as='div'>
      <Text  fontSize='13px' fontWeight={500} color="text" >
        {account}
      </Text>
      </AccountWrap>
    </Text>
    <Flex mb="32px">
      <LinkExternal color='#47DA3B' small href={`https://bscscan.com/address/${account}`} mr="16px">
        View on BscScan
      </LinkExternal>
      <Text>
        <CopyToClipboard toCopy={account}>Copy</CopyToClipboard>
      </Text>
    </Flex>
    <Flex justifyContent="center">
    <Button mt='60px' scale='md' width='100%' variant='green' >
        Logout
    </Button>
    
    </Flex>
    </ModalWrap>
  </Modal>
);

export default AccountModal;

const ModalWrap = styled.div`
  padding:0 20px 20px;
`;
const AccountWrap = styled(Input)`
  padding: 17px 20px;
  width:100%;
`;
