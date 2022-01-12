import React from "react";
import styled from "styled-components";

const Input = ({
  value,
  onChange,
  placeholder,
  width,
  name,
}: {
  name: string;
  width?: string;
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
}) => {
  return <InputBlock width={width} name={name} value={value} onChange={onChange} placeholder={placeholder} />;
};

export default Input;

const InputBlock = styled.input<{ width?: string }>`
  outline: none;
  box-shadow: none;
  border: none;
  line-height: 15px;
  resize: none;
  width: ${({ width }) => width || "auto"};
  padding: 15px 30px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  font-size: 13px;
  letter-spacing: 0.5px;
  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
  color: ${({ theme }) => theme.colors.text};
  cursor: auto;

  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 15px;
  }
`;
