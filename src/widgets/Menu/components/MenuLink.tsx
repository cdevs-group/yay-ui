import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import { LinkHeaderProps } from "../types";

const MenuLink = ({ name, url, size, onClick }: LinkHeaderProps) => {
  return (
    <Link onClick={() => onClick(url)}>
      <LinkItem size={size}>{name}</LinkItem>
    </Link>
  );
};

export default MenuLink;

const Link = styled.div``;

const LinkItem = styled(Text)`
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 20px;
  transition: 0.3s;
  text-shadow: ${({ theme }) => theme.colors.textShadow};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    &::after {
      display: block;
      bottom: -30px;
      width: 0;
      height: 2px;
      content: "";
      position: absolute;
      background: #4be43e;
      transition: all.3s;
    }
    margin: 0 20px;
    ${Link}.active & {
      &::after {
        width: 100%;
        opacity: 1;
      }
    }
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    margin: 0 35px;
  }
`;
