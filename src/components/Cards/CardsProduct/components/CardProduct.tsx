import React from 'react';
import styled from 'styled-components';
import { CardProductProp } from '../../types';
import Text from '../../../Text/Text'

export const setColor = (param:{bg?:string}) => {
  switch (param.bg) {
    case "red":
      return "linear-gradient(180deg, #FF8383 0%, #EF5D5D 100%);"
    case "blue":
      return "linear-gradient(180deg, #95D0FF 0%, #78C2FD 100%);"
    case "green":
      return "linear-gradient(180deg, #BDFF00 0%, #95CA00 100%);"
    case "purple":
      return "linear-gradient(180deg, #CA61FB 0%, #B255DE 100%);"
    case "pink":
      return "#ECC2DD;"
    default:
      return "linear-gradient(180deg, #FF8383 0%, #EF5D5D 100%);"
  }
};

const CardProduct = ({ title, img, bg, closed }: CardProductProp) => {
  return (
    <CardWrap  closed={closed}  bg={bg}>
      <CardTitle size='lg'>{title}</CardTitle>
        <img src={img} alt="some img" />
    </CardWrap>
  );
};


export default CardProduct;

export const CardWrap = styled.div<{closed?:boolean,bg:string}>`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 220px;
  height: 220px;
  padding: 20px 24px;
  background: ${setColor};
  box-shadow: ${({theme})=>theme.colors.boxShadow2};
  border-radius: 15px;
  opacity: ${props => props.closed ? .3 : 1};
  box-sizing: border-box;
  &::after{
    display:block;
    content:'';
    position: absolute;
    width: calc(100% + 2px);
    min-height: calc(100% + 2px);
    border: 1.5px solid ${({theme})=>theme.colors.green};
    box-sizing: border-box;
    top: -1px;
    left: -1px;
    opacity: 0;
    z-index: -1;
    filter: drop-shadow(${({theme})=>theme.colors.boxShadow2});
    border-radius: 15px;
    transition: .3s;
  }
  & img{
    position:absolute;
    bottom:0;
    left:0;
    width: 100%;
  }
  &:hover{
    &::after{
      opacity: ${props => props.closed ? 0 : 1};
    }
  }
`;
export const CardTitle = styled(Text)`
  letter-spacing: 0.02em;
  text-shadow: ${({theme})=>theme.colors.textShadow2};
`;