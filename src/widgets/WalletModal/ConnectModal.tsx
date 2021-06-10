import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { Link } from '../../components/Link';
import { Modal } from '../Modal';
import { Login } from './types';
import { Text } from '../../components/Text';
import {
  Metamask,
  TrustWallet,
  MathWallet,
  TokenPocket,
  WalletConnect,
  BinanceWallet,
  SafepackWallet,
} from '../../constants/images';

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
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 15px;
`;

const Wrap = styled.div`
  text-align: center;
  padding: 0 20px 0 27px;
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  padding: 6px 6px 6px 27px;
  width: 100%;
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
`;

const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 9px;
  background: ${({ theme }) => transparentize(0.95, theme.colors.text)};
`;

const config = [
  {
    title: 'Metamask',
    icon: Metamask,
  },
  {
    title: 'Trust Wallet',
    icon: TrustWallet,
  },
  {
    title: 'Math Wallet',
    icon: MathWallet,
  },
  {
    title: 'Token Pocket',
    icon: TokenPocket,
  },
  {
    title: 'Wallet Connect',
    icon: WalletConnect,
  },
  {
    title: 'Binance Chain Wallet',
    icon: BinanceWallet,
  },
  {
    title: 'SafePak Wallet',
    icon: SafepackWallet,
  },
];

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => (
  <Modal title="Connect Wallet" onDismiss={onDismiss}>
    {config.map((entry, index) => (
      <Wrap key={index}>
        <Button>
          <Text fontWeight={500} color="text" mr="16px" fontSize="15px">
            {entry.title}
          </Text>
          <ImgWrap>
            <img src={entry.icon} />
          </ImgWrap>
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
