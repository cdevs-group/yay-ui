import React from "react";
import styled from "styled-components";
import { CardProductProp } from "../../types";
import { CardWrap, CardTitle } from "./CardProduct";

const CardProductLeft = ({ title, img, bg, closed, href }: CardProductProp) => {
  return (
    <CardLeftWrap closed={closed} bg={bg} to={href || ""}>
      <CardTitle size="lg">{title}</CardTitle>
      <img src={img} alt="some img" />
    </CardLeftWrap>
  );
};

export default CardProductLeft;

const CardLeftWrap = styled(CardWrap)`
  & img {
    width: 105%;
    left: auto;
    right: 0;
    bottom: -15px;
  }
`;
