import React from "react";
import styled from "styled-components";
import { Text } from "../Text";

const Input = ({
  title,
  margin,
  placeholder,
  name,
  value,
  onChange,
  textArea,
  inputError,
  fontSize,
}: {
  textArea?: boolean;
  onChange: (e: any) => void;
  name: string;
  value: string | number;
  title: string;
  margin?: string;
  placeholder: string;
  inputError?: string;
  fontSize?: string;
}) => {
  return (
    <Wrapper margin={margin}>
      <TitleStyle>{title}</TitleStyle>
      {textArea ? (
        <>
          <InputArea name={name} value={value} onChange={onChange} placeholder={placeholder} />
          {inputError && (
            <TextStyle color="darkPink" fontSize="13px">
              {inputError}
            </TextStyle>
          )}
        </>
      ) : (
        <>
          <InputBlock fontSize={fontSize} name={name} value={value} onChange={onChange} placeholder={placeholder} />
          {inputError && (
            <TextStyle color="darkPink" fontSize="13px">
              {inputError}
            </TextStyle>
          )}
        </>
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
  cursor: auto;
`;
const InputBlock = styled.input<{ fontSize?: string }>`
  outline: none;
  box-shadow: none;
  border: none;
  line-height: 15px;
  resize: none;
  width: 100%;
  padding: 15px 30px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  font-size: ${({ fontSize }) => fontSize || "15px"};
  letter-spacing: 0.5px;
  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
  color: ${({ theme }) => theme.colors.text};
  cursor: auto;
`;
const TextStyle = styled(Text)`
  position: absolute;
  bottom: -25px;
`;
export const Wrapper = styled.div<{ margin?: string }>`
  margin: ${({ margin }) => margin || 0};
  position: relative;
`;
export const TitleStyle = styled(Text)`
  margin-bottom: 10px;
  text-align: left;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.05em;
`;
