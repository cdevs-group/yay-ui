import React from "react";
import styled from "styled-components";
import { Text } from "../../..";
import { BLUR } from "../../../constants/images";
import { transparentize } from "polished";

const TopBlock = ({ title, value, id }: { title: string; value: string | number; id?: string }) => {
  return (
    <div style={{ position: "relative" }}>
      <Wrapper id={id}>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </Wrapper>
      {id && <Claimed id={id} />}
    </div>
  );
};

export default TopBlock;

const Wrapper = styled.div`
  position: relative;
  padding: 11px 17px;
  background: ${({ theme }) => theme.colors.bgGray};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-radius: 15px;
  overflow: hidden;
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
  font-size: 19px;
  line-height: 30px;
  letter-spacing: 0.05em;
`;
const Blur = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

const Claimed = styled.div<{ id: string }>`
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
  pointer-events: none;
  border-radius: 20px;
  z-index: 1;
  background-image: ${({ id }) => `-moz-element(#${id})`};
  background-repeat: no-repeat;
  background-position: 50% 0;
  filter: blur(10px);
`;
