import React from "react";
import styled from "styled-components";

const Input = ({
  value,
  onChange,
  name,
  margin,
}: {
  margin?: string;
  value: string | number;
  onChange: (e: any) => void;
  name: string;
}) => {
  return <InputBlock margin={margin} value={value} onChange={onChange} name={name.toLowerCase()} placeholder={name} />;
};

export default Input;

const InputBlock = styled.input<{ margin?: string }>`
  margin: ${({ margin }) => margin || 0};
  width: 100%;
  padding: 8px 10px;
  border-radius: 9px;
  border: 1px solid ${({ theme }) => theme.colors.whiteRgba3};
  font-size: 13px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  background: transparent;
  &::placeholder {
    color: ${({ theme }) => theme.colors.textGray};
  }
`;
