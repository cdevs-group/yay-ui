import React from "react";
import styled from "styled-components";
import {ArrowLeft, BnbIcon} from "../../components/Svg";
import { transparentize } from 'polished';
import Tabs from "./components/Tabs";

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

const CommitBlock = styled.div`
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

const AmountTitle = styled.div`
  margin-top: 32px;
  font-size: 11px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.text};
`

const ButtonBnb = styled.button`
  margin-top: 39px;
  padding: 17px 0;
  width: 100%;
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
      <CommitBlock>
        <div>
          <Text>Commit</Text>
          <Number>0.0</Number>
        </div>
        <IconBlock>
          <BnbIcon/>
          <div className="bnb">BNB</div>
        </IconBlock>
      </CommitBlock>
      <AmountTitle>Amount to bid  </AmountTitle>
      <Tabs/>
      <ButtonBnb>Up BNB</ButtonBnb>
      <BottomText>You won`t be able to remove or change your <br/> position once you enter it</BottomText>
    </Wrap>
  );
};
export default PositionCard;
