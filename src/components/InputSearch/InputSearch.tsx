import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { SearchIcon2 } from "../Svg";
import { InputSearchProp } from "./types";

const InputSearch = ({ height, placeholder, value, onChange, iconLess, width, name, disabled }: InputSearchProp) => {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <InputBlock height={height} width={width}>
      <InputItem
        disabled={disabled}
        width={width}
        value={value}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={placeholder}
        name={name}
      />
      <Button iconLess={iconLess}>
        <SearchIcon2 color={focus ? "green" : "text"} />
      </Button>
    </InputBlock>
  );
};

InputSearch.defaultProps = {
  placeholder: "Seacrh",
};

export default InputSearch;

const InputBlock = styled.div<{ width?: string; height?: string }>`
  position: relative;
  width: ${({ width }) => (width ? width : "fit-content")};
  height: ${({ height }) => (height ? height : "auto")};
`;

const InputItem = styled.input`
  width: ${({ width }) => (width ? width : "fit-content")};
  height: 100%;
  position: relative;
  display: inline-block;
  padding: 16px 25px;
  background: rgb(20, 20, 25);
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-radius: 12px;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.5px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
  outline: none;
  border: 1px solid transparent;
  &::placeholder {
    opacity: 0.5;
  }
  &:focus {
    border: 1px solid #4cee3e;
    &::placeholder {
      opacity: 0;
    }
  }
`;

const Button = styled.button<{ iconLess?: boolean }>`
  display: ${({ iconLess }) => (iconLess ? "none" : "block")};
  padding: 0;
  border: none;
  background: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 21px;
`;
