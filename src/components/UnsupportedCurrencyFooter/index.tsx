import React from 'react'
import { Button } from '../Button'
import { Text } from '../Text'
import { Modal, useModal, InjectedModalProps } from '../../widgets/Modal'
import { Link } from '../Link'
import styled from 'styled-components'
import { AutoRow } from '../Layout/Row'
import { AutoColumn } from '../Layout/Column'
import { CurrencyLogo } from '../Logo'

interface Props extends InjectedModalProps {
  tokens: any[]
  srcs: string[],
  isEther: boolean
  chainId: any
  bscScanLink: string
  unsupportedTokens: { [address: string]: any }
}

const DetailsFooter = styled.div`
  padding: 8px 0;
  width: 100%;
  max-width: 400px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.invertedContrast};
  text-align: center;
`;

const UnsupportedModal: React.FC<Props> = ({ onDismiss, isEther, srcs, chainId, bscScanLink, unsupportedTokens, tokens }) => {
  return (
    <Modal title="Unsupported Assets" maxWidth="420px" onDismiss={onDismiss}>
      <AutoColumn gap="lg">
        {tokens.map((token) => {
          return (
            token &&
            unsupportedTokens &&
            Object.keys(unsupportedTokens).includes(token.address) && (
              <AutoColumn key={token.address?.concat("not-supported")} gap="10px">
                <AutoRow gap="5px" align="center">
                  <CurrencyLogo currency={token} size="24px" isEther={isEther} srcs={srcs} />
                  <Text>{token.symbol}</Text>
                </AutoRow>
                {chainId && (
                  <Link external small color="primaryDark" href={bscScanLink}>
                    {token.address}
                  </Link>
                )}
              </AutoColumn>
            )
          );
        })}
        <AutoColumn gap="lg">
          <Text>
            Some assets are not available through this interface because they may not work well with our smart contract
            or we are unable to allow trading for legal reasons.
          </Text>
        </AutoColumn>
      </AutoColumn>
    </Modal>
  );
};

export default function UnsupportedCurrencyFooter({ tokens, srcs, isEther, chainId, bscScanLink, unsupportedTokens }: Props) {
  const [onPresentModal] = useModal(
  <UnsupportedModal
    tokens={tokens}
    srcs={srcs}
    isEther={isEther}
    chainId={chainId}
    bscScanLink={bscScanLink}
    unsupportedTokens={unsupportedTokens}
  />)

  return (
    <DetailsFooter>
      <Button variant="text" onClick={onPresentModal}>
        Read more about unsupported assets
      </Button>
    </DetailsFooter>
  );
}
