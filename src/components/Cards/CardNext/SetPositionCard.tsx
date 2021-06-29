import React, { useState } from "react";
import styled from "styled-components";
import { BalanceInput } from "../../BalanceInput";
import ArrowIcon from "../ArrowIcon";
import { SetPositionCardProps } from "../types";
import Tabs from "./TabsCard";

const SetPositionCard: React.FC<SetPositionCardProps> = ({
  onBack,
  children,
  inputValue,
  onUserInput,
  showFieldWarning,
  inputProps,
  handlePercentChange,
  disabledTab,
  texts,
}) => {
  return (
    <Wrap>
      <ButtonBack onClick={onBack}>
        <ArrowIcon />
      </ButtonBack>
      <Title>{texts?.setPosition || "Set Position"}</Title>
      <BalanceInput
        texts={texts}
        value={inputValue}
        onUserInput={onUserInput}
        isWarning={showFieldWarning}
        inputProps={inputProps}
      />
      <TabsBlock>
        <Tabs handlePercentChange={handlePercentChange} disabledTab={disabledTab} />
      </TabsBlock>
      {children}
    </Wrap>
  );
};

export default SetPositionCard;

const Wrap = styled.div`
  position: relative;
`;
const ButtonBack = styled.button`
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: none;
  transform: rotateY(180deg);
  background: ${({ theme }) => theme.colors.whiteRgba};
  border-radius: 7px;
  cursor: pointer;
`;
const Title = styled.div`
  margin-bottom: 22px;
  font-weight: 500;
  font-size: 21px;
  line-height: 27px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.text};
`;
const TabsBlock = styled.div`
  margin-top: 35px;
  margin-bottom: 16px;
`;
