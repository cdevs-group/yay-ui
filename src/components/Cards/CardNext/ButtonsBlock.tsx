import React, { ReactNode } from "react";
import styled from "styled-components";
import { Button } from "../../Button";
import { BetPosition } from "../../Card/types";
import { CompleteIcon } from "../../Svg";
import { ButtonsBlockRops } from "../types";

const ButtonsBlock = ({ pool, hasEnteredUp, hasEnteredDown, handleSetPosition, disabledButton }: ButtonsBlockRops) => {
  return (
    <>
      <PrizeBlock>
        <p>PRIZE POOL</p>
        <p>{pool}</p>
      </PrizeBlock>
      <Buttons>
        <ButtonWrap style={{ marginBottom: 14 }} className={hasEnteredDown ? "unCoise" : ""}>
          <Button
            width="100%"
            variant="green"
            onClick={() => handleSetPosition(BetPosition.BULL)}
            disabled={disabledButton}
          >
            Enter UP
          </Button>
          <IconComplete className="completeIcon" hasEntered={hasEnteredUp}>
            <CompleteIcon fill="#FFB72C" />
          </IconComplete>
        </ButtonWrap>
        <ButtonWrap className={hasEnteredUp ? "unCoise" : ""}>
          <Button
            width="100%"
            variant="pink"
            onClick={() => handleSetPosition(BetPosition.BEAR)}
            disabled={disabledButton}
          >
            Enter DOWN
          </Button>
          <IconComplete className="completeIcon" hasEntered={hasEnteredDown}>
            <CompleteIcon fill="#FFB72C" />
          </IconComplete>
        </ButtonWrap>
      </Buttons>
    </>
  );
};

export default ButtonsBlock;


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
  &.unCoise {
    opacity: 0.25;
  }
`;

const IconComplete = styled.div<{ hasEntered?: boolean }>`
  display: ${({ hasEntered }) => (hasEntered ? "flex" : "none")};
  margin-left: 7px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 19px;
`;
