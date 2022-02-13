import React from "react";
import styled from "styled-components";
import { Skeleton, Text } from "../../../..";
import { transparentize } from "polished";
import StyledTag from "../../../../components/Tag/StyledTag";

const TopBlock = ({
  title,
  value,
  id,
  isBlur,
  loading,
}: {
  title: string;
  value: string | number;
  id?: string;
  isBlur?: boolean;
  loading: boolean;
}) => {
  return (
    <div style={{ position: "relative" }}>
      <Wrapper id={id}>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </Wrapper>
      {loading && (
        <Skelet>
          <Skeleton height="100%" width="100%" />
        </Skelet>
      )}
      {isBlur && <Claimed id={id || ""} />}
    </div>
  );
};

export default TopBlock;

const Wrapper = styled.div`
  position: relative;
  padding: 11px 17px;
  background: ${({ theme }) => theme.colors.bgGray};
  box-shadow: ${({ theme }) => theme.colors.boxShadow2};
  border-radius: 15px;
  z-index: 1;
  overflow: hidden;
  text-align: center;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 21px 27px;
  }
`;
const Skelet = styled(Wrapper)`
  position: absolute;
  padding: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  & div {
    width: 100%;
    height: 100%;
  }
  z-index: 2;
`;
const Title = styled(Text)`
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.05em;
`;
const Value = styled(Text)`
  margin-top: 5px;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textGray};
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
