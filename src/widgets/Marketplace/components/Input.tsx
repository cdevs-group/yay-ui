import React from "react";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import { baseColors } from "../../../theme/colors";

const Input = ({
  title,
  margin,
  placeholder,
  name,
  value,
  onChange,
  inputError,
  disabled,
}: {
  onChange: (e: any) => void;
  name: string;
  value: string | number;
  title: string;
  margin?: string;
  placeholder: string;
  inputError?: string;
  disabled?: boolean;
}) => {
  return (
    <Wrapper margin={margin}>
      <TitleStyle>{title}</TitleStyle>
      <InputBlock disabled={disabled} name={name} value={value} onChange={onChange} placeholder={placeholder} />
      {inputError && (
        <TextStyle color={baseColors.darkPink} fontSize="13px">
          {inputError}
        </TextStyle>
      )}
    </Wrapper>
  );
};

export default Input;

const InputBlock = styled.input<{ disabled?: boolean }>`
  outline: none;
  box-shadow: none;
  border: none;
  line-height: 15px;
  resize: none;
  width: 100%;
  padding: 15px 30px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  font-size: 13px;
  letter-spacing: 0.5px;
  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
  color: ${({ theme }) => theme.colors.text};
  cursor: auto;
  opacity: ${({ disabled }) => (disabled ? ".6" : 1)};
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 15px;
  }
`;
const TextStyle = styled(Text)`
  position: absolute;
  bottom: -25px;
`;
const Wrapper = styled.div<{ margin?: string }>`
  margin: ${({ margin }) => margin || 0};
  position: relative;
`;
const TitleStyle = styled(Text)`
  margin-bottom: 10px;
  text-align: left;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.05em;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 18px;
  }
`;
