import React from "react";
import styled from "styled-components";
import {ArrowLeft, BnbIcon} from "../../components/Svg";
import { transparentize } from 'polished';
import Tabs from "./components/Tabs";
import CommitBlock from "../CommitBlock/CommitBlock";
import Button from "../Button/Button";

const Wrap = styled.div`
  padding: 22px 21px 29px 22px;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 21px;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.text};
`

const ButtonArrow = styled.button`
  padding: 8px 8px 0;
  border: none;
  background: ${({ theme }) => transparentize(0.85, theme.colors.text)};
  border-radius: 7px;
  cursor: pointer;
`

const AmountTitle = styled.div`
  margin-top: 32px;
  font-size: 11px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.text};
`

const ButtonBnb = styled.div`
  margin-top: 39px;
`

const BottomText = styled.div`
  margin-top: 20px;
  font-size: 11px;
  line-height: 14px;
  text-align: center;
  color: ${({ theme }) => theme.colors.greyText};
`

const PositionCard: React.FC = () => {
  return (
    <Wrap>
      <Title>
        <div>Set Position</div>
        <ButtonArrow type="button"><ArrowLeft/></ButtonArrow>
      </Title>
      <CommitBlock num="0.0" coinIcon={<BnbIcon/>} coin="BNB"/>
      <AmountTitle>Amount to bid  </AmountTitle>
      <Tabs/>
      <ButtonBnb><Button variant='green' width="100%">Up BNB </Button></ButtonBnb>
      <BottomText>You won`t be able to remove or change your <br/> position once you enter it</BottomText>
    </Wrap>
  );
};
export default PositionCard;
