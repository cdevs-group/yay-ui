import React from "react";
import { Text } from "../../../components/Text";
import styled from "styled-components";
import { Flex } from "../../../components/Box";

interface HeaderBridgeStakingProps {
  children: React.ReactNode;
  title: string;
  margin?: string;
  maxWidth?: string;
}

const HeaderBridgeStaking = ({ margin, title, children, maxWidth }: HeaderBridgeStakingProps) => {
  return (
    <Flex margin={margin && margin} maxWidth={maxWidth && maxWidth} flexDirection="column" alignItems="center">
      <Title>{title}</Title>
      <SubTitle>{children}</SubTitle>
    </Flex>
  );
};

export default HeaderBridgeStaking;

const Title = styled(Text)`
  font-weight: normal;
  font-size: 42px;
  line-height: 121.8%;
  letter-spacing: 0.01em;
  margin-bottom: 18px;
`;

const SubTitle = styled(Text)`
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.17em;
`;
