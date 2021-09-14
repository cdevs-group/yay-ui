import React from "react";
import styled from "styled-components";
import { Text } from "../../components/Text";
import { transparentize } from "polished";

interface IProps {
  data: {
    text: string;
    value: string;
  };
  canClaim: boolean;
  disabledTopCards?: boolean;
}

const CardIndicator = ({ data, canClaim, disabledTopCards }: IProps) => {
  return (
    <Card>
      <Text
        color="greyText"
        fontSize="14px"
        lineHeight="24px"
        letterSpacing="-0.02em"
        marginBottom="2px"
        fontWeight="400"
      >
        {data.text}
      </Text>
      <Text fontSize="24px" lineHeight="32px" letterSpacing="-0.02em" fontWeight="400">
        {data.value}
      </Text>
      <Claimed canClaim={canClaim} disabledTopCards={!!disabledTopCards} />
    </Card>
  );
};

const Card = styled.div`
  position: relative;
  padding: 18px 24px;
  background: ${({ theme }) => theme.colors.dark};
  box-shadow: ${({ theme }) => theme.colors.boxShadow2};
  border-radius: 20px;
`;
const Claimed = styled.div<{ canClaim: boolean, disabledTopCards: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(15px);
  background: ${({ theme }) => transparentize(0.5, theme.colors.bgGray)};
  transition: 0.3s;
  opacity: ${({ canClaim, disabledTopCards }) => (disabledTopCards || !canClaim ? 1 : 0)};
  pointer-events: ${({ canClaim, disabledTopCards }) => (disabledTopCards || !canClaim ? "auto" : "none")};
  border-radius: inherit;
`;

export default CardIndicator;
