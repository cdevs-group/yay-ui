import React from "react";
import styled from "styled-components";
import { Button } from "../../../../components/Button";
import { Text } from "../../../../components/Text";
import { Modal, InjectedModalProps } from "../../../../widgets/Modal";
import { Link } from "../../../../components/Link";
import { CurrencyLogo } from "../../../../components/Logo";
import { AutoColumn } from "../../../../components/Layouts/Column";
import { AutoRow } from "../../../../components/Layouts/Row";

export interface UnsupportedModalProps extends InjectedModalProps {
  tokens: any[];
  srcs: string[];
  isEther: boolean;
  chainId: any;
  getBscScanLink: any;
  unsupportedTokens: { [address: string]: any };
  texts: {
    title: string;
    someAssets: string;
  };
}

export interface UnsupportedCurrencyFooterProps extends InjectedModalProps {
  texts: string;
  onPresentModal: () => void;
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

export const UnsupportedModal: React.FC<UnsupportedModalProps> = ({
  onDismiss,
  isEther,
  srcs,
  chainId,
  getBscScanLink,
  unsupportedTokens,
  tokens,
  texts,
}) => {
  return (
    <Modal title={texts.title} maxWidth="420px" onDismiss={onDismiss}>
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
                  <Link external small color="primaryDark" href={getBscScanLink(token.address, "address", chainId)}>
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

export default function UnsupportedCurrencyFooter({ onPresentModal, texts }: UnsupportedCurrencyFooterProps) {
  return (
    <DetailsFooter>
      <Button variant="text" onClick={onPresentModal}>
        {texts}
      </Button>
    </DetailsFooter>
  );
}
