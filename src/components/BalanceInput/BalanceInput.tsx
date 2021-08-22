import React from "react";
import styled from "styled-components";
import { Input } from "../Input";
import { BnbIcon } from "../Svg";
import { BalanceInputProps } from "./types";

const BalanceInput: React.FC<BalanceInputProps> = ({
  value,
  placeholder = "0.0",
  onUserInput,
  inputProps,
  isWarning = false,
  decimals = 18,
  texts,
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.validity.valid) {
      onUserInput(e.currentTarget.value.replace(/,/g, "."));
    }
  };

  return (
    <InputWrap>
      <TitleInput>{texts?.commit || "Commit"}</TitleInput>
      <InputIcon>
        <BnbIcon />
          {texts?.currency || 'BNB'}
      </InputIcon>
      <Input
        className={isWarning ? "warning" : ""}
        pattern={`^[0-9]*[.,]?[0-9]{0,${decimals}}$`}
        inputMode="decimal"
        min="0"
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder}
        {...inputProps}
      />
    </InputWrap>
  );
};

export default BalanceInput;

const InputWrap = styled.div`
  position: relative;
  padding: 17px 100px 20px 20px;
  background: rgba(0, 0, 0, 0.25);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
`;
const TitleInput = styled.div`
  margin-bottom: 15px;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.5px;
  color: #a3a3a3;
`;
const InputIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 7px 15px;
  position: absolute;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 11px;
  line-height: 14px;
  letter-spacing: 0.5px;
  color: #ffffff;
  & svg {
    margin-bottom: 7px;
  }
  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 29px;
    height: 29px;
    border-radius: 7px;
    background: ${({ theme }) => theme.colors.blueGradient};
    margin-bottom: 7px;
  }
`;
