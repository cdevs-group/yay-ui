import React, { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import { LinkHeaderProps } from "../types";

const MenuLink = ({ name, url, setOpenMenu, submenu }: LinkHeaderProps) => {
  const isHttpLink = url?.startsWith("http");
  const Item = () => <LinkItem>{name}</LinkItem>;

  const refItem = useRef<any>(null);
  const [openDropdown, setOpenDropdown] = useState(false);

  // const handleClickOutside = useCallback(
  //   (e) => {
  //     if (refItem.current !== e.target && refItem.current && !refItem.current.contains(e.target)) {
  //       setOpenDropdown(false);
  //     }
  //   },
  //   [setOpenDropdown]
  // );

  // useEffect(() => {
  //   if (document && refItem && refItem.current) {
  //     document.addEventListener("mouseup", handleClickOutside, false);
  //   }
  //   return () => {
  //     document.removeEventListener("mouseup", handleClickOutside, false);
  //   };
  // }, [refItem, handleClickOutside]);

  const handleLink = () => {
    setOpenDropdown(false);
    console.log('openDropdown')
    setOpenMenu(false);
  };
console.log(openDropdown)
  if (submenu?.length) {
    return (
      <DropdownWrapper ref={refItem}>
        <LinkItem onClick={() => setOpenDropdown(true)}>{name}</LinkItem>
        <Dropdown open={openDropdown}>
          {submenu?.map((el) => (
            <MenuLink {...el} setOpenMenu={setOpenMenu} />
          ))}
        </Dropdown>
      </DropdownWrapper>
    );
  }

  return (
    <>
      {isHttpLink && (
        <a href={url} target="_blank">
          <Item />
        </a>
      )}
      {!isHttpLink && (
        <StyledLink exact onClick={handleLink} to={url}>
          <Item />
        </StyledLink>
      )}
    </>
  );
};

export default MenuLink;

const DropdownWrapper = styled.div`
  position: relative;
`;
const Dropdown = styled.div<{ open?: boolean }>`
  position: absolute;
  left: 35px;
  top: 30px;
  display: flex;
  flex-direction: column;
  padding: 11px 16px;
  min-width: 140px;
  background: rgba(0, 0, 0, 0.25);
  box-shadow: inset 0px 2px 20px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  transition: 0.3s;
  z-index: ${({ open }) => (open ? 1 : -1)};
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? 'all' : 'none')};
`;

const StyledLink = styled(NavLink)``;

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
      opacity: 0;
    }
    margin: 0 20px;
    ${StyledLink}.active & {
      &::after {
        width: 100%;
        opacity: 1;
      }
    }
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    margin: 0 35px;
  }
  ${Dropdown} & {
    margin: 0;
    text-transform: uppercase;
    font-size: 11px;
    line-height: 14px;
    letter-spacing: 0.11em;
    padding: 9px 0;
    &::after {
      content: none;
    }
  }
`;
