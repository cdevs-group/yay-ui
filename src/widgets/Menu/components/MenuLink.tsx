import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import { LinkHeaderProps } from "../types";

const MenuLink = ({ name, url, size }: LinkHeaderProps) => {  
  return (
    <Link to={url} exact>
      <LinkItem size={size}>
        {name}
      </LinkItem>
    </Link>
  );
};

export default MenuLink;

const Link = styled(NavLink)``
const LinkItem = styled(Text)`
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 35px;
  transition: 0.3s;
  text-shadow: ${({ theme }) => theme.colors.textShadow};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
  &::after {
    display: block;
    bottom: -28px;
    width: 0;
    height: 2px;
    content: "";
    position: absolute;
    background: #4be43e;
    transition: all.3s;
  }
  ${Link}.active & {
    &::after {
      width: 100%;
      opacity: 1;
    }
  }
`;
