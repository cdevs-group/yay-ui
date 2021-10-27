import React from "react";
import styled from "styled-components";
import { Text } from "../../../components/Text";

interface IProps {
  title: string;
  text: string;
}

const CardIndicator = ({ title, text }: IProps) => {
  return (
    <Card>
      <Text mb="14px" fontSize="24px" lineHeight="30px" letterSpacing="0.05em" fontWeight="400">
        {title}
      </Text>
      <Text color="greyText" lineHeight="19px" letterSpacing="0.05em" fontWeight="400">
        {text}
      </Text>
    </Card>
  );
};

export default CardIndicator;

const Card = styled.div`
  padding: 25px;
  text-align: center;
  background: ${({ theme }) => theme.colors.dark};
  box-shadow: ${({ theme }) => theme.colors.boxShadow2};
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.text};
`;
