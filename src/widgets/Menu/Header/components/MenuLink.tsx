import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Text from '../../../../components/Text/Text';
import { LinkHeaderProps } from '../types';

const MenuLink = ({name, url, size,className}:LinkHeaderProps) =>{
  return(
    <LinkItem 
     className={className}
     size={size} >
      <NavLinks 
      // to={url}
      >{name}</NavLinks>
    </LinkItem>
  )
};

export default MenuLink;

const LinkItem = styled(Text)`
  position: relative;
  color:${({theme})=>theme.colors.text};
  margin: 0 35px;
  transition:.3s;
  text-shadow: ${({theme})=>theme.colors.textShadow};
  cursor: pointer;
  &:hover{
    color:${({theme})=>theme.colors.green};
  };
  &::after{
    display: block;
    bottom: -28px;
    width: 0;
    height: 2px;
    content: '';
    position: absolute;
    background: #4BE43E;
    transition: all.3s;
  }
  &.active::after{
    width: 100%;
    opacity: 1;
  }
`;
const NavLinks = styled.a``
