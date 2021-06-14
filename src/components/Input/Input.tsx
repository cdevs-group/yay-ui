import React from 'react';
import { useState } from 'react'
import styled from "styled-components";
import { SearchIcon } from "../Svg";
import { InputProp } from "./types";

const Input = ({ placeholder }: InputProp) => {
  const [focus, setFocus] = useState<boolean>(false)

  return (
    <InputBlock>
      <InputItem
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={placeholder}
      />
      <Button>
        <SearchIcon color={focus ? "#47DA3B" : 'white'} />
      </Button>
    </InputBlock>
  )
}


Input.defaultProps = {
  placeholder: 'Seacrh'
};

export default Input;

const InputBlock = styled.div`
  position: relative;
  width: fit-content;
`;
const InputItem = styled.input`
  position: relative;
  display: block;
  padding: 16px 25px;
  background: rgb(20,20,25);
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-radius: 12px;
  border: none;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.5px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
  outline: none;
  border: 1px solid transparent;
  &::placeholder{
    opacity: .5;
    }
  &:focus {
    border:1px solid #4CEE3E;
    &::placeholder{
      opacity: 0;
    }
    }  
`;
const Button = styled.button`
padding: 0;
  border: none;
  background: none;
  position: absolute;
  top:50%;
  transform: translateY(-50%);
  right: 15px;
`;
