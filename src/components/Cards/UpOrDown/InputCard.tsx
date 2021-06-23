import React from "react";
import styled from "styled-components";
import { BnbIcon } from "../../Svg";
import { InputProps } from "../types";

const InputCard = ({ value, onChange }: InputProps) => {
  return (
    <InputWrap>
      <TitleInput>Commit</TitleInput>
      <InputIcon>
        <BnbIcon />
        BNB
      </InputIcon>
      <Input value={value} onChange={onChange} placeholder="0.0" />
    </InputWrap>
  );
};

export default InputCard;

const Input = styled.input`
  background: none;
  border: none;
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: 0.5px;
  color: #a3a3a3;
  outline: none;
`;
const InputWrap = styled.div`
  position: relative;
  margin-top: 20px;
  padding: 17px 20px 20px;
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
`;
