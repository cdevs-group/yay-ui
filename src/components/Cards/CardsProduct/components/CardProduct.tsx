import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CardProductProp } from "../../types";
import Text from "../../../Text/Text";

export const setColor = (param: { bg?: string }) => {
  switch (param.bg) {
    case "red":
      return "linear-gradient(180deg, #FF8383 0%, #EF5D5D 100%);";
    case "blue":
      return "linear-gradient(180deg, #95D0FF 0%, #78C2FD 100%);";
    case "green":
      return "linear-gradient(180deg, #BDFF00 0%, #95CA00 100%);";
    case "purple":
      return "linear-gradient(180deg, #CA61FB 0%, #B255DE 100%);";
    case "pink":
      return "#ECC2DD;";
    default:
      return "linear-gradient(180deg, #FF8383 0%, #EF5D5D 100%);";
  }
};

const CardProduct = ({ title, img, bg, closed, position, href }: CardProductProp) => {
  return (
    <CardWrap closed={closed} bg={bg} className={position || ""} to={href || ""}>
      <CardTitle size="lg">{title}</CardTitle>
      <img src={img} alt="some img" />
    </CardWrap>
  );
};

export default CardProduct;

export const CardWrap = styled(NavLink)<{ closed?: boolean; bg: string }>`
  position: relative;
  padding: 14px 24px;
  /* height: 100%;
  width: 100%;
  max-width: 137px;
  height: 136px; */
  height: 43vw;
  width: 100%;
  background: ${setColor};
  box-shadow: ${({ theme }) => theme.colors.boxShadow2};
  border-radius: 15px;
  opacity: ${(props) => (props.closed ? 0.3 : 1)};
  box-sizing: border-box;
  cursor: ${({ closed }) => (closed ? "default" : "pointer")};
  &::after {
    display: block;
    content: "";
    position: absolute;
    width: calc(100% + 2px);
    min-height: calc(100% + 2px);
    border: 1.5px solid ${({ theme }) => theme.colors.green};
    box-sizing: border-box;
    top: -1px;
    left: -1px;
    opacity: 0;
    z-index: 0;
    filter: drop-shadow(${({ theme }) => theme.colors.boxShadow2});
    border-radius: 15px;
    transition: 0.3s;
  }
  & img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  &.left {
    & img {
      width: 105%;
      left: auto;
      right: 0;
      bottom: -15px;
    }
  }
  &.right {
    & img {
      width: 100%;
      left: auto;
      right: -10px;
      bottom: -15px;
    }
  }
  &.rightCenter {
    & img {
      width: 110%;
      left: auto;
      right: -25px;
      bottom: -25px;
    }
  }
  &:hover {
    &::after {
      opacity: ${(props) => (props.closed ? 0 : 1)};
    }
  }
  &:nth-child(5) {
    display: none;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    height: 30vw;
    width: 100%;
    &:nth-child(5) {
      display: grid;
    }
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    height: 18vw;
    width: 100%
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    max-width: 220px;
    height: 220px;
  }
`;
export const CardTitle = styled(Text)`
  font-size: 15px;
  letter-spacing: 0.02em;
  text-shadow: ${({ theme }) => theme.colors.textShadow2};
  ${({ theme }) => theme.mediaQueries.xl} {
    font-size: 19px;
  }
`;
