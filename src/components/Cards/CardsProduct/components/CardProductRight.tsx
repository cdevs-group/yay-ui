import React from "react";
import styled from "styled-components";
import { CardProductProp } from "../../types";
import { CardWrap, CardTitle } from "./CardProduct";

const CardProductRight = ({ title, img, bg, closed, href }: CardProductProp) => {
  return (
    <CardRightWrap closed={closed} bg={bg} to={href || ""}>
      <CardTitle size="lg">{title}</CardTitle>
      <img src={img} alt="some img" />
    </CardRightWrap>
  );
};

export default CardProductRight;

const CardRightWrap = styled(CardWrap)`
  & img {
    width: 110%;
    left: auto;
    right: -40px;
    bottom: -15px;
  }
`;
