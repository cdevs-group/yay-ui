import React from "react";
import styled from "styled-components";
import { Text } from "../../../..";
import { RowBetween } from "../../../../components/Layouts/Row";
import QuestionHelper from "../../../../components/QuestionHelper";

const FixedSizeListRow = ({
  style,
  texts,
}: {
  style: any;
  texts: {
    expanded: string;
    tokens: string;
  };
}) => {
  return (
    <FixedContentRow style={style}>
      <Card>
        <RowBetween>
          <Text small>{texts.expanded}</Text>
          <QuestionHelper text={texts.tokens} ml="4px" />
        </RowBetween>
      </Card>
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

const Card = styled.div`
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.greyBg2};
  border-radius: 12px;
`;
