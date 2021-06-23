import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../Button";
import { CompleteIcon } from "../../Svg";
import { CardButtonsProps } from "../types";

const Wrap = styled.div`
  padding-bottom: 10px;
`;

const Payout = styled.div`
  padding-bottom: 15px;
  background: ${({ theme }) => theme.colors.cardBg};
`;
const Text = styled.div`
  padding: 19px 10px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: 0.5px;
  color: #ffffff;
`;
const ButtonWrap = styled.div`
  position: relative;
  &:last-child {
    margin-top: 30px;
  }
  &.unChoiced {
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

const CardButtonsUpDown = ({ pool, confirm, handleTurn, choise }: CardButtonsProps) => {
  return (
    <Wrap>
      <Payout>
        <Text>
          <p>PriZe POOL</p>
          <p>{pool}</p>
        </Text>
        <ButtonWrap className={confirm && choise === "down" ? "unChoiced" : ""}>
          <Button value="up" onClick={handleTurn} variant="green" width="100%">
            Enter UP
          </Button>
          {confirm && choise === "up" ? (
            <CompleteBlock>
              <CompleteIcon />
            </CompleteBlock>
          ) : null}
        </ButtonWrap>
        <ButtonWrap className={confirm && choise === "up" ? "unChoiced" : ""}>
          <Button value="down" onClick={handleTurn} variant="pink" width="100%">
            Enter DOWN
          </Button>
          {confirm && choise === "down" ? (
            <CompleteBlock>
              <CompleteIcon />
            </CompleteBlock>
          ) : null}
        </ButtonWrap>
      </Payout>
    </Wrap>
  );
};
export default CardButtonsUpDown;
