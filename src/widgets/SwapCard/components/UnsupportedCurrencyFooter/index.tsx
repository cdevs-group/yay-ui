import React from "react";
import styled from "styled-components";
import { Button } from "../../../../components/Button";
import { Text } from "../../../../components/Text";
import { Modal, useModal, InjectedModalProps } from "../../../../widgets/Modal";
import { Link } from "../../../../components/Link";
import { CurrencyLogo } from "../../../../components/Logo";
import { AutoColumn } from "../../../../components/Layouts/Column";
import { AutoRow } from "../../../../components/Layouts/Row";

export interface UnsupportedCurrencyFooterProps extends InjectedModalProps {
  tokens: any[];
  srcs: string[];
  isEther: boolean;
  chainId: any;
  bscScanLink: string;
  unsupportedTokens: { [address: string]: any };
  texts: {
    someAssets: string;
    readMore: string;
  };
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

const UnsupportedModal: React.FC<UnsupportedCurrencyFooterProps> = ({
  onDismiss,
  isEther,
  srcs,
  chainId,
  bscScanLink,
  unsupportedTokens,
  tokens,
  texts,
}) => {
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
          <Text>{texts.someAssets}</Text>
        </AutoColumn>
      </AutoColumn>
    </Modal>
  );
};

export default function UnsupportedCurrencyFooter({
  tokens,
  srcs,
  isEther,
  chainId,
  bscScanLink,
  unsupportedTokens,
  texts,
}: UnsupportedCurrencyFooterProps) {
  const [onPresentModal] = useModal(
    <UnsupportedModal
      tokens={tokens}
      srcs={srcs}
      isEther={isEther}
      chainId={chainId}
      bscScanLink={bscScanLink}
      unsupportedTokens={unsupportedTokens}
      texts={texts}
    />
  );

  return (
    <DetailsFooter>
      <Button variant="text" onClick={onPresentModal}>
        {texts.readMore}
      </Button>
    </DetailsFooter>
  );
}