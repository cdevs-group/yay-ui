import React from "react";
import styled from "styled-components";
import { ReverseArrowsIcon } from "../Svg";

const SwapButton = ({ onClick }: any) => {
  return (
    <ButtonWrap onClick={onClick}>
      <ReverseArrowsIcon />
    </ButtonWrap>
  );
};

export default SwapButton;

const ButtonWrap = styled.button`
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-sizing: border-box;
  border: none;
  background: ${({ theme }) => theme.colors.buttonBg3};
  border: 5px solid ${({ theme }) => theme.colors.cardBg};
  cursor: pointer;
`;
