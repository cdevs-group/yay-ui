import React from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { Modal } from "../Modal";
import { Login } from "./types";
import { Text } from "../../components/Text";
// import * as Metamask from "./img/metamask.png";

interface Props {
  login: Login;
  onDismiss?: () => void;
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin: 0 auto;
  padding: 38px 0 26px;
  background: linear-gradient(180deg, #4CEE3E -16%, #47DA3B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Wrap = styled.div`
  text-align: center;
`

const Button = styled.button`
display: inline-flex;
align-items: center;
margin-bottom: 14px;
padding: 16px 7px 16px 27px;
width: 85%;
background: rgba(0, 0, 0, 0.25);
border: 0;
border-radius: 16px;
box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;
cursor: pointer;
font-family: inherit;
font-size: 15px;
justify-content: space-between;
letter-spacing: 0.03em;
line-height: 19px;
outline: 0;
transition: background-color 0.2s;
color: #fff;
` 

const config = [
  {
    title: "Metamask",
    // icon: Metamask,
  },
  {
    title: "Trust Wallet",
    // icon: TrustWallet,
  },
  {
    title: "Math Wallet",
    // icon: MathWallet,
  },
  {
    title: "Token Pocket",
    // icon: TokenPocket,
  },
  {
    title: "Wallet Connect",
    // icon: WalletConnect,
  },
  {
    title: "Binance Chain Wallet",
    // icon: BinanceChain,
  },
  {
    title: "SafePak Wallet",
    // icon: SafePalWallet,
  },
];

const Icon = styled.img``

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => (
  <Modal title="Connect Wallet" onDismiss={onDismiss}>
    {config.map((entry, index) => (
      <Wrap key={index}>
        <Button>
          <Text bold color="primary" mr="16px">
            {entry.title}
          </Text>
          {/* <Icon src={entry.icon}/> */}
        </Button>
      </Wrap>      
    ))}
    <HelpLink
      href="https://docs.pancakeswap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain"
      external
    >
      Learn how connect
    </HelpLink>
  </Modal>
);

export default ConnectModal;
