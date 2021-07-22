import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CardProductProp } from "../../types";
import { CardWrap, CardTitle } from "./CardProduct";

const CardProductRight = ({ title, img, bg, closed, href }: CardProductProp) => {
  return (
    <NavLink to={href || ""}>
      <CardRightWrap closed={closed} bg={bg}>
        <CardTitle size="lg">{title}</CardTitle>
        <img src={img} alt="some img" />
      </CardRightWrap>
    </NavLink>
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
