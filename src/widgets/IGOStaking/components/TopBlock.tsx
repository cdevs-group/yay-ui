import React from "react";
import styled from "styled-components";
import { Text } from "../../..";

const TopBlock = ({ title, value }: { title: string; value: string | number }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Wrapper>
  );
};

export default TopBlock;

const Wrapper = styled.div`
  padding: 11px 17px;
  background: ${({ theme }) => theme.colors.bgGray};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-radius: 15px;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 21px 27px;
  }
`;
const Title = styled(Text)`
  margin-bottom: 21px;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textGray};
`;
const Value = styled(Text)`
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.05em;
`;
