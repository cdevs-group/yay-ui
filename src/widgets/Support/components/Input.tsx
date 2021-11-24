import React from "react";
import { Wrapper, TitleStyle } from "./styles";
import styled from "styled-components";

const Input = ({
  title,
  margin,
  placeholder,
  name,
  value,
  onChange,
  textArea,
}: {
  textArea?: boolean;
  onChange: (e: any) => void;
  name: string;
  value: string | number;
  title: string;
  margin?: string;
  placeholder: string;
}) => {
  return (
    <Wrapper margin={margin}>
      <TitleStyle>{title}</TitleStyle>
      {textArea ? (
        <InputArea name={name} value={value} onChange={onChange} placeholder={placeholder} />
      ) : (
        <InputBlock name={name} value={value} onChange={onChange} placeholder={placeholder} />
      )}
    </Wrapper>
  );
};

export default Input;

const InputArea = styled.textarea`
  height: 80px;
  outline: none;
  box-shadow: none;
  border: none;
  line-height: 19px;
  resize: none;
  width: 100%;
  padding: 15px 30px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  font-size: 15px;
  letter-spacing: 0.5px;
  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;
const InputBlock = styled.input`
  outline: none;
  box-shadow: none;
  border: none;
  line-height: 15px;
  resize: none;
  width: 100%;
  padding: 15px 30px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  font-size: 15px;
  letter-spacing: 0.5px;
  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;
