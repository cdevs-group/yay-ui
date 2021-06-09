import React from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { Modal } from "../Modal";
import { Login } from "./types";
import { Text } from "../../components/Text";
import * as Metamask from "./img/metamask.png";
import * as TrustWallet from "./img/trust-wallet.png";
import * as MathWallet from "./img/math-wallet.png";
import * as TokenPocket from "./img/tocken-pocket.png";
import * as WalletConnect from "./img/wallet-connect.png";
import * as BinanceWallet from "./img/binance-wallet.png";
import * as SafepackWallet from "./img/safepack-wallet.png";

interface Props {
  login: Login;
  onDismiss?: () => void;
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin: 0 auto;
  padding: 24px 0 26px 0;
  background: ${({ theme }) => theme.colors.linkColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Wrap = styled.div`
  text-align: center;
`

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  padding: 7px 7px 7px 27px;
  width: 85%;
  background: ${({ theme }) => theme.colors.buttonBg};
  border: 0;
  border-radius: 12px;
  box-shadow: inset 0px 4px 4px ${({ theme }) => theme.colors.buttonShadow};
  cursor: pointer;
  font-family: inherit;
  font-size: 15px;
  letter-spacing: 0.03em;
  line-height: 19px;
  outline: 0;
  transition: background-color 0.2s;
  color: ${({ theme }) => theme.colors.text};
` 

const config = [
  {
    title: "Metamask",
    icon: Metamask,
  },
  {
    title: "Trust Wallet",
    icon: TrustWallet,
  },
  {
    title: "Math Wallet",
    icon: MathWallet,
  },
  {
    title: "Token Pocket",
    icon: TokenPocket,
  },
  {
    title: "Wallet Connect",
    icon: WalletConnect,
  },
  {
    title: "Binance Chain Wallet",
    icon: BinanceWallet,
  },
  {
    title: "SafePak Wallet",
    icon: SafepackWallet,
  },
];

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => (
  <Modal title="Connect Wallet" onDismiss={onDismiss}>
    {config.map((entry, index) => (
      <Wrap key={index}>
        <Button>
          <Text bold color="primary" mr="16px">
            {entry.title}
          </Text>
          <img src={entry.icon}/>
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
