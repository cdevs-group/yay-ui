import React from "react";
import styled from "styled-components";
import { Text } from "../../components/Text";

interface IProps {
  data: {
    text: string;
    value: string;
  };
}

const CardsIndicators = ({ data }: IProps) => {
  return (
    <Card>
      <Text color="greyText" fontSize="14px" lineHeight="24px" letterSpacing="-0.02em" marginBottom="2px">
        {data.text}
      </Text>
      <Text fontSize="24px" lineHeight="32px" letterSpacing="-0.02em">
        {data.value}
      </Text>
    </Card>
  );
};

const Card = styled.div`
  padding: 18px 24px;
  background: ${({ theme }) => theme.colors.dark};
  box-shadow: ${({ theme }) => theme.colors.boxShadow2};
  border-radius: 20px;
`;

export default CardsIndicators;
