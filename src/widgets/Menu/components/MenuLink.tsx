import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { variant } from "styled-system";
import DropdownLayout from "../../../components/DropDown/DropDown";
import Text from "../../../components/Text/Text";
import { LinkHeaderProps } from "../types";
import { styleVariantsDropdownMenu } from "./theme";
import { Variant as VariantDropdown } from "../../../components/DropDown/types";
import { ArrowDownIcon, Flex } from "../../..";
import { LabelTop } from "../../../components/LabelTop";

const MenuLink = ({
  name,
  url,
  setOpenMenu,
  submenu,
  openDropdown,
  setOpenDropdown,
  variant,
  comingSoon,
  colorTheme,
}: LinkHeaderProps) => {
  const isHttpLink = url?.startsWith("http");
  const Item = () => <LinkItem colorTheme={colorTheme}>{name}</LinkItem>;

  const handleLink = () => {
    if (setOpenDropdown) setOpenDropdown(false);
    setOpenMenu(false);
  };

  if (submenu?.length) {
    return (
      <DropdownLayout
        open={openDropdown || false}
        setOpen={setOpenDropdown || (() => null)}
        icon={
          <LinkItem colorTheme={colorTheme} onClick={() => (setOpenDropdown ? setOpenDropdown(true) : () => null)}>
            <Flex alignItems="center">
              {name}
              {submenu && variant === "behind" && (
                <div style={{ marginLeft: 10 }}>
                  <ArrowDownIcon />
                </div>
              )}
            </Flex>
          </LinkItem>
        }
        variant={variant || "menu"}
      >
        <Dropdown open={openDropdown} variant={variant}>
          {submenu?.map((el, i) => (
            <MenuLink
              colorTheme={colorTheme}
              {...el}
              key={i}
              setOpenMenu={setOpenMenu}
              setOpenDropdown={setOpenDropdown}
            />
          ))}
        </Dropdown>
      </DropdownLayout>
    );
  }

  if (comingSoon)
    return (
      <CominSoonWrapper>
        <LabelTop colorTheme={colorTheme} label={comingSoon}>
          {name}
        </LabelTop>
      </CominSoonWrapper>
    );

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

const Dropdown = styled.div<{ open?: boolean; variant?: VariantDropdown }>`
  display: flex;
  flex-direction: column;
  padding: 11px 16px;
  min-width: 140px;
  background: rgba(0, 0, 0, 0.25);
  box-shadow: inset 0px 2px 20px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  ${variant({
    variants: styleVariantsDropdownMenu,
  })}
`;

const StyledLink = styled(NavLink)``;

const CominSoonWrapper = styled.div`
  margin: 0 0 20px;
  ${({ theme }) => theme.mediaQueries.xl} {
    margin: 0 20px;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    margin: 0 30px;
  }
`;
const LinkItem = styled(Text)<{ colorTheme?: string }>`
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 20px;
  transition: 0.3s;
  text-shadow: ${({ theme }) => theme.colors.textShadow};
  cursor: pointer;
  font-weight: 400;
  &:hover {
    color: ${({ theme, colorTheme }) => colorTheme || theme.colors.green};
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    &::after {
      display: block;
      bottom: -30px;
      width: 0;
      height: 2px;
      content: "";
      position: absolute;
      background: ${({ theme, colorTheme }) => colorTheme || theme.colors.green};
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
  ${({ theme }) => theme.mediaQueries.xxl} {
    margin: 0 30px;
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
