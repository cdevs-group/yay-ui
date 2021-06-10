import React from 'react';
import styled from 'styled-components';
import { CardProductProp } from '../../types';
import {CardWrap, CardTitle} from './CardProduct';

const CardProductRcket = ({ title, img, bg, closed }: CardProductProp) => {
  return (
    <CardRocketWrap  closed={closed}  bg={bg}>
      <CardTitle size='lg'>{title}</CardTitle>
        <img src={img} alt="some img" />
    </CardRocketWrap>
  );
};

export default CardProductRcket;

const CardRocketWrap = styled(CardWrap)`
  & img{
    width:120%;
    left: auto;
    right: -70px;
    bottom: -35px;
  }
`;
