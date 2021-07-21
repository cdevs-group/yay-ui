import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CardProductProp, ImageProps } from "../../types";
import Text from "../../../Text/Text";

export const setColor = (param: { bg?: string }) => {
  switch (param.bg) {
    case "red":
      return "linear-gradient(180deg, #FF8383 0%, #EF5D5D 100%);";
    case "blue":
      return "linear-gradient(180deg, #a6b5c2 0%, #78C2FD 100%);";
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

const CardProduct = ({ title, img, bg, closed, href, small, ...props }: CardProductProp) => {
  return (
    <CardWrap small={small} closed={closed} bg={bg} to={href || ""}>
      <CardTitle small={small} size="lg">
        {title}
      </CardTitle>
      <Img src={img} alt="some img" {...props} />
    </CardWrap>
  );
};

export default CardProduct;

export const CardWrap = styled(NavLink)<{ closed?: boolean; bg: string; small?: boolean }>`
  display: inline-block;
  position: relative;
  padding: ${({ small }) => (small ? "10px 15px" : "14px 24px")};
  height: ${({ small }) => (small ? "118px !important" : "43vw")};
  width: 100%;
  background: ${setColor};

  border-radius: 15px;
  opacity: ${(props) => (props.closed ? 0.3 : 1)};
  box-sizing: border-box;
  cursor: ${({ closed }) => (closed ? "default" : "pointer")};
  border: 2px solid transparent;
  transition: 0.3s;
  &:hover {
    border: 2px solid ${({ theme, closed }) => (closed ? "transparent" : theme.colors.green)};
    box-shadow: ${({ theme, closed }) => (closed ? "" : theme.colors.boxShadow6)};
    transition: 0.3s;
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
    width: 100%;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    max-width: 220px;
    height: 220px;
  }
`;

const Img = styled.img<ImageProps>`
  position: absolute;
  bottom: ${({ bottom }) => bottom || 0};
  right: ${({ right }) => right || 0};
  left: ${({ left }) => left || "auto"};
  top: ${({ top }) => top || "auto"};
  max-width: ${({ maxWidth }) => maxWidth || "100%"};
`;

export const CardTitle = styled(Text)<{ small?: boolean }>`
  font-size: ${({ small }) => (small ? "11px !important" : "15px")};
  letter-spacing: 0.02em;
  text-shadow: ${({ theme }) => theme.colors.textShadow2};
  ${({ theme }) => theme.mediaQueries.xl} {
    font-size: 19px;
  }
`;
