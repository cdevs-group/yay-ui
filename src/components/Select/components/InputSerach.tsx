import React from "react";
import styled from "styled-components";

const InputSearch = ({
  value,
  onChange,
  name,
  inputPlaceholder,
}: {
  value: string | number;
  onChange: (e: any) => void;
  name: string;
  inputPlaceholder?: string;
}) => <InputBlock value={value} onChange={onChange} name={name.toLowerCase()} placeholder={inputPlaceholder} />;

export default InputSearch;

const InputBlock = styled.input<{ margin?: string }>`
  margin: 0 0 18px 0;
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
