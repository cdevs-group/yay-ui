import React from "react";
import styled from "styled-components";
import { Text } from "../../../../components/Text";
import { SlotSummaryProps } from "../../types";

const SlotSummary = ({ text, error, circleHidden }: SlotSummaryProps) => {
  return (
    <TextStyled
      className={`${error || ""}`}
      fontSize="13px"
      lineHeight="100%"
      fontWeight={400}
      color={error ? "darkPink" : "green"}
      mr="5px"
    >
      {!circleHidden && <Circle error={error} />}
      {text}
    </TextStyled>
  );
};

export default SlotSummary;

const TextStyled = styled(Text)`
  display: flex;
  align-items: center;
  font-weight: normal;
  font-size: 13px;
  line-height: 100%;
  margin-bottom: 15px;
  &.error {
    margin-right: 0;
  }
  & span {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Circle = styled.div<{ error?: boolean }>`
  width: 4px;
  height: 4px;
  margin-right: 5px;
  border-radius: 50%;
  background: ${({ theme, error }) => (error ? theme.colors.darkPink : theme.colors.green)};
`;
