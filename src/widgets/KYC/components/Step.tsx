import React from "react";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";
import { ArrowIcon } from "../../../components/Svg";
import { StatusKYC } from "../types";

const Step = ({
  title,
  description,
  number,
  status,
}: {
  title: string;
  description: string;
  number: number;
  status: StatusKYC;
}) => {
  return (
    <StepWrapper>
      <Title status={status}>
        {title} {number}
      </Title>
      <Description>{description}</Description>
      {number !== 3 && (
        <ArrowWrap completed={status === StatusKYC.COMPLETED}>
          <ArrowIcon fill="transparent" />
        </ArrowWrap>
      )}
    </StepWrapper>
  );
};

export default Step;

const StepWrapper = styled(Flex)`
  position: relative;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 372px;
  width: 100%;
  height: 112px;
  background: ${({ theme }) => theme.colors.cardBg};
  box-shadow: ${({ theme }) => theme.colors.boxShadow2};
  border-radius: 15px;
  text-align: center;
`;
const Title = styled(Text)<{ status: StatusKYC }>`
  margin-bottom: 15px;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${({ status, theme }) =>
    status === StatusKYC.COMPLETED
      ? theme.colors.green
      : status === StatusKYC.FAIL
      ? theme.colors.darkPink
      : theme.colors.textGray};
`;
const Description = styled(Text)`
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textGray};
`;
const ArrowWrap = styled.div<{ completed: boolean }>`
  width: 45px;
  height: 45px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme, completed }) => (completed ? theme.colors.greenGradient : theme.colors.textGray)};
  border: 5px solid ${({ theme }) => theme.colors.bgGray};
  border-radius: 50px;
  right: 50%;
  transform: translateX(50%);
  bottom: -30px;
  z-index: 2;
  box-shadow: ${({ theme }) => theme.colors.boxShadow13};
  ${({ theme }) => theme.mediaQueries.md} {
    bottom: auto;
    right: -30px;
    transform: none;
  }
  & svg {
    transform: rotate(135deg);
    ${({ theme }) => theme.mediaQueries.md} {
      transform: rotate(45deg);
    }
  }
`;
