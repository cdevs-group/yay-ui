import React from "react";
import styled from "styled-components";
import { Text } from "../Text";
import { ProgressStepsProps } from "./types";
import { baseColors } from "../../theme/colors";

const ProgressSteps = ({ isError, step, texts, stepsText }: ProgressStepsProps) => {
  return (
    <ProgressWrap>
      <Title>
        <Text fontSize="10px">{isError ? texts.error : texts.waiting}</Text>
        <CheckIt color={isError ? baseColors.darkPink : baseColors.green} as="button" fontSize="10px">
          {isError ? texts.checkIt : texts.confirmations}
        </CheckIt>
      </Title>
      <Steps>
        {stepsText.map((name, i) => (
          <Step key={i}>
            <Indicator complete={i < step} isError={isError} />
            <Text fontSize="10px">{name}</Text>
          </Step>
        ))}
      </Steps>
    </ProgressWrap>
  );
};

export default ProgressSteps;

const ProgressWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
`;
const CheckIt = styled(Text)`
  margin-left: 4px;
  padding: 0;
  background: none;
  border: none;
`;
const Steps = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;
const Step = styled.div`
  margin-right: 5px;
  text-align: center;
  &:last-child {
    margin-right: 0;
  }
`;
const Indicator = styled.div<{ isError?: boolean; complete?: boolean }>`
  position: relative;
  width: 40px;
  height: 12px;
  margin-bottom: 10px;
  background: ${({ theme }) => theme.colors.buttonBg};
  box-shadow: ${({ theme }) => theme.colors.boxShadow4};
  border-radius: 3px;
  &:after {
    display: block;
    content: "";
    position: absolute;
    width: calc(100% - 5px);
    height: calc(100% - 6px);
    top: 3px;
    left: 2.5px;
    border-radius: 2px;
    background: ${({ isError, complete, theme }) =>
      isError ? theme.colors.darkPink : complete ? theme.colors.greenText2 : "transparent"};
  }
`;
