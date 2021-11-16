import React from "react";
import styled from "styled-components";
import { Text } from "../../../components/Text";

interface IProps {
  name: string;
  value: string;
}

const CardTopIndicator = ({ name, value }: IProps) => {
  return (
    <Card>
      <Text color="greyText" lineHeight="24px" letterSpacing="0.03em" fontWeight="400" fontSize="14px">
        {name}
      </Text>
      <Text fontSize="24px" lineHeight="32px" letterSpacing="-0.02em" fontWeight="400">
        {value}
      </Text>
    </Card>
  );
};

export default CardTopIndicator;

const Card = styled.div`
  padding: 21px 24px;
  background: ${({ theme }) => theme.colors.dark};
  box-shadow: ${({ theme }) => theme.colors.boxShadow2};
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.text};
`;
