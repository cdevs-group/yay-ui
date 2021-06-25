import React, { ReactNode } from "react";
import styled from "styled-components";
import { CompleteIcon } from "../../Svg";
import { ButtonsBlockRops } from "../types";

const ButtonsBlock = ({ children, pool, betMethod }: ButtonsBlockRops) => {
  console.log(betMethod);
  return (
    <ButtonsBlockWrap>
      <PrizeBlock>
        <p>PRIZE POoL</p>
        <p>{pool}</p>
      </PrizeBlock>
      <Buttons>
        {children.map((item, i) => (
          <ButtonWrap
            className={
              i === 1 && betMethod === "betBull" ? "unCoise" : i === 0 && betMethod === "betBear" ? "unCoise" : ""
            }
            key={i}
          >
            {item}{" "}
            {i === 0 && betMethod === "betBull" ? (
              <CompleteBlock>
                <CompleteIcon />
              </CompleteBlock>
            ) : i === 1 && betMethod === "betBear" ? (
              <CompleteBlock>
                <CompleteIcon />
              </CompleteBlock>
            ) : null}
          </ButtonWrap>
        ))}
      </Buttons>
    </ButtonsBlockWrap>
  );
};

export default ButtonsBlock;

const ButtonsBlockWrap = styled.div`
  height: 193px;
  width: 335px;
  padding-bottom: 17px;
  background: ${({ theme }) => theme.colors.bgGray};
  position: relative;
  left: -10%;
  z-index: 2;
  padding: 0 13px;
  top: -13px;
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.colors.cardShadow};
  border-radius: 15px;
  @media (max-width: 767px) {
    width: 303px;
  }
`;
const Buttons = styled.div`
  position: relative;
  &.unChoiced {
    opacity: 0.25;
  }
`;
const PrizeBlock = styled.div`
  padding: 23px 18px 18px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.text};
`;
const ButtonWrap = styled.div`
  position: relative;
  margin-top: 8px;
  margin-bottom: 11px;
  &.unCoise {
    opacity: 0.25;
  }
`;
const CompleteBlock = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  & svg {
    fill: ${({ theme }) => theme.colors.yellow};
  }
`;
