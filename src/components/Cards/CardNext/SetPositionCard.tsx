import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../Button";
import { BetPosition } from "../../Card/types";
import ArrowIcon from "../ArrowIcon";
import { SetPositionCardProps } from "../types";
import InputCard from "./InputCard";
import Tabs from "./TabsCard";

const SetPositionCard: React.FC<SetPositionCardProps> = ({ onBack, position, handleBetMethod, isWarning }) => {
  const [inputValue, setInputValue] = useState("");
  const [tabValue, setTabValue] = useState(0);
  const account = true;

  const handleToggleTabs = (e: any) => {
    setTabValue(+e.currentTarget.value);
  };

  const handleInputChange = (e: any) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };
  return (
    <Wrap>
      <ButtonBack onClick={onBack}>
        <ArrowIcon />
      </ButtonBack>
      <Title>Set Position</Title>
      <InputCard value={inputValue} onChange={handleInputChange} isWarning={isWarning} />
      <TabsBlock>
        <Tabs handleToggleTabs={handleToggleTabs} tabValue={tabValue} />
      </TabsBlock>
      {/* {account ? (
        <Button
          width="100%"
          variant="green"
          mb="20px"
          // disabled={!account || disabled}
          onClick={handleBetMethod}
          // isLoading={isTxPending}
        >
          {position === BetPosition.BULL ? "Confirm UP" : "Confirm DOWN"}
        </Button>
      ) : (
        <Button disabled mb="20px" width="100%">
          Тут текст и стиль для неавторизованного пользователя
        </Button>
      )}
      <NoteBlock>You won`t be able to remove or change your position once you enter it</NoteBlock> */}
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
  margin-bottom: 25px;
`;
const NoteBlock = styled.div`
  font-size: 11px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textGray};
`;
