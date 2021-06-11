import React from "react";
import styled from "styled-components";
import { ClosedPriceProp } from "./types";


const PriceBlock = styled.div`
  position: relative;
  margin-top: 49px;
  padding: 17px 13px 14px 25px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.linkColor};
  z-index:1;
  &::before{
    position: absolute;
    display: block;
    content:'';   
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    box-sizing: border-box;
    top: 1px;
    left: 1px;
    background: ${({ theme }) => theme.colors.darkGreyBg};
    border-radius: 12px;
    z-index: 0;
  }
  & span {
    position: relative;
    z-index: 3;
    font-size: 15px;
    line-height: 19px;
    color: ${({ theme }) => theme.colors.greyText};
  }
`

const Price = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  background: ${({ theme }) => theme.colors.linkColor};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  & div {
    padding: 6px 12px;
    background: ${({ theme }) => theme.colors.gradients.greenGradient};
    border-radius: 7px;
    font-size: 15px;
    line-height: 19px;
  }
`

const ClosedPrice: React.FC<ClosedPriceProp> = ({price, rightText}) => {

  return (
    <PriceBlock>
      <span>Closed Price</span>
      <Price>{price}<div>{rightText}</div></Price>
    </PriceBlock>
  );
};

export default ClosedPrice;
