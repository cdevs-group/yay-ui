import React from "react";
import styled from "styled-components";
import { Text } from "../../../..";
import { RowBetween } from "../../../../components/Layout/Row";
import QuestionHelper from "../../../../components/QuestionHelper";

const FixedSizeListRow = ({
  style,
  texts,
}: // importRow,
// selectedCurrency,
// onCurrencySelect,
// otherCurrency,
// currencyRow,
// isSelected,
{
  style: any;
  texts: {
    expanded: string;
    tokens: string;
  };
  // importRow: React.ReactNode;
  // currencyRow: React.ReactNode;
  // selectedCurrency: any | null;
  // onCurrencySelect: (currency: any) => void;
  // otherCurrency: any | null;
  // isSelected: boolean;
}) => {
  return (
    <FixedContentRow style={style}>
      <div>
        <RowBetween>
          <Text small>{texts.expanded}</Text>
          <QuestionHelper text={texts.tokens} ml="4px" />
        </RowBetween>
      </div>
    </FixedContentRow>
  );
};

export default FixedSizeListRow;

const FixedContentRow = styled.div`
  padding: 4px 20px;
  height: 56px;
  display: grid;
  grid-gap: 16px;
  align-items: center;
`;
