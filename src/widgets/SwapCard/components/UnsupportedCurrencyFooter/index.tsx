import React, { ReactNode } from "react";
import styled from "styled-components";
import { Button } from "../../../../components/Button";
import { Text } from "../../../../components/Text";
import { InjectedModalProps } from "../../../../widgets/Modal";
import { Link } from "../../../../components/Link";
import { AutoColumn } from "../../../../components/Layouts/Column";
import { AutoRow } from "../../../../components/Layouts/Row";

export interface UnsupportedModalProps {
  token: any;
  unsupportedTokens: { [address: string]: any };
  currencyLogo: ReactNode;
  chainId: any;
  hrefLink: string;
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
  background-color: ${({ theme }) => theme.colors.bgOpacitY3};
  text-align: center;
`;

export const UnsupportedModal: React.FC<UnsupportedModalProps> = ({
  token,
  unsupportedTokens,
  currencyLogo,
  chainId,
  hrefLink,
}) => {
  return (
    <>
      {token && unsupportedTokens && Object.keys(unsupportedTokens).includes(token.address) && (
        <AutoColumn key={token.address?.concat("not-supported")} gap="10px">
          <AutoRow gap="5px" align="center">
            {currencyLogo}
            <Text>{token.symbol}</Text>
          </AutoRow>
          {chainId && (
            <Link external small color="primaryDark" href={hrefLink}>
              {token.address}
            </Link>
          )}
        </AutoColumn>
      )}
    </>
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
