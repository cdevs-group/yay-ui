import React, { useState } from "react";
import styled from "styled-components";
import ArrowIcon from "../../Cards/ArrowIcon";
import { SetPositionCardBTCProps } from "../types";
import InputCard from "../../Cards/CardNext/InputCard";
import Tabs from "../../Cards/CardNext/TabsCard";

const SetPositionCardBTC: React.FC<SetPositionCardBTCProps> = ({
  onBack,
  children,
  inputValue,
  handleInputChange,
  showFieldWarning,
  inputProps,
}) => {
  const [tabValue, setTabValue] = useState(0);

  const handleToggleTabs = (e: any) => {
    setTabValue(+e.currentTarget.value);
  };

  return (
    <Wrap>
      <ButtonBack onClick={onBack}>
        <ArrowIcon />
      </ButtonBack>
      <Title>Set Position</Title>
      <InputCard value={inputValue} onChange={handleInputChange} isWarning={showFieldWarning} inputProps={inputProps} />
      <TabsBlock>
        <Tabs handleToggleTabs={handleToggleTabs} tabValue={tabValue} />
      </TabsBlock>
      {children}
    </Wrap>
  );
};

export default SetPositionCardBTC;

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
const NoteBlock = styled.div`
  font-size: 11px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textGray};
`;
