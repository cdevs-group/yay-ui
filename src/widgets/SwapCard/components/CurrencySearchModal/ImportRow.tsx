import React, { CSSProperties } from "react";
import styled from "styled-components";
import { Button } from "../../../../components/Button";
import { AutoColumn } from "../../../../components/Layout/Column";
import { AutoRow, RowFixed } from "../../../../components/Layout/Row";
import { CheckIcon2 } from "../../../../components/Svg";
import { Text } from "../../../../components/Text";

const TokenSection = styled.div<{ dim?: boolean }>`
  padding: 4px 20px;
  height: 56px;
  display: grid;
  grid-template-columns: auto minmax(auto, 1fr) auto;
  grid-gap: 16px;
  align-items: center;

  opacity: ${({ dim }) => (dim ? "0.4" : "1")};
`;

const CheckIconStyled = styled(CheckIcon2)`
  height: 16px;
  width: 16px;
  margin-right: 6px;
`;

const NameOverflow = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 140px;
  font-size: 12px;
`;

export default function ImportRow({
  token,
  style,
  dim,
  list,
  isAdded,
  isActive,
  currencyLogo,
  listLogo,
  handleClickImport,
  texts,
}: {
  token: any;
  style?: CSSProperties;
  dim?: boolean;
  list: any;
  isAdded?: boolean;
  isActive?: boolean;
  currencyLogo: React.ReactNode;
  listLogo: React.ReactNode;
  handleClickImport: () => void;
  texts: {
    via: string;
    import: string;
    active: string;
  };
}) {
  return (
    <TokenSection style={style}>
      {currencyLogo}
      <AutoColumn gap="4px" style={{ opacity: dim ? "0.6" : "1" }}>
        <AutoRow>
          <Text>{token.symbol}</Text>
          <Text color="textDisabled" ml="8px">
            <NameOverflow title={token.name}>{token.name}</NameOverflow>
          </Text>
        </AutoRow>
        {list && list.logoURI && (
          <RowFixed>
            <Text fontSize="11px" mr="4px">
              {texts.via} {list.name}
            </Text>
            {listLogo}
          </RowFixed>
        )}
      </AutoColumn>
      {!isActive && !isAdded ? (
        <Button width="fit-content" onClick={handleClickImport} variant="green" scale="sm">
          {texts.import}
        </Button>
      ) : (
        <RowFixed style={{ minWidth: "fit-content" }}>
          <CheckIconStyled />
          <Text color="green">{texts.active}</Text>
        </RowFixed>
      )}
    </TokenSection>
  );
}
