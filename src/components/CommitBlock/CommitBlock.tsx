import React from "react";
import styled from "styled-components";
import { CommitBlockProp } from "./types";
import { transparentize } from 'polished';

const Commit = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 49px;
  padding: 17px 14px 14px 25px;
  background: ${({ theme }) => transparentize(0.75, theme.colors.blackColor)};
  box-shadow: ${({ theme }) => theme.colors.boxShadow4};
  border-radius: 12px;
`

const Text = styled.div`
  margin-bottom: 18px;
  font-size: 15px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.greyText};
`

const Number = styled.div`
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.text};
`

const IconBlock = styled.div`
  padding: 10px 19px 6px;
  background: ${({ theme }) => transparentize(0.95, theme.colors.text)};
  border-radius: 12px;
  text-align: center;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.text};
  & div.bnb {
    margin-top: 7px;
  }
`

const CommitBlock: React.FC<CommitBlockProp> = ({num, coinIcon, coin}) => {

  return (
    <Commit>
        <div>
          <Text>Commit</Text>
          <Number>{num}</Number>
        </div>
        <IconBlock>
          {coinIcon}
          <div className="bnb">{coin}</div>
        </IconBlock>
      </Commit>
  );
};

export default CommitBlock;
