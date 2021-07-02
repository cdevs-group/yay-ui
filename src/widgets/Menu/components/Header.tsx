import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Logo";
import { NavProps } from "../types";
import Account from "./Account";
import MenuLink from "./MenuLink";
import Burger from "./Burger";
import Languages from "../../../components/DropDown/Languages";

const Header: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  links,
  profile,
  children,
}) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <HeaderWrap>
      <Line>
        <LogoWrap to="/">
          <Logo />
        </LogoWrap>
        <Nav className={openMenu ? "open" : ""}>
          {links.map((item, i) => (
            <MenuLink
              key={i}
              size="md"
              name={item.name}
              url={item.url}
            />
          ))}
          <LanguageBlockMob>
            <Languages currentLang={currentLang} setLang={setLang} langs={langs} />
          </LanguageBlockMob>
        </Nav>
        <RightContent>
          <LanguageBlockDesk>
            <Languages currentLang={currentLang} setLang={setLang} langs={langs} />
          </LanguageBlockDesk>
          <Account account={account} login={login} logout={logout} />
          <Burger open={openMenu} onClick={() => setOpenMenu(!openMenu)} />
        </RightContent>
      </Line>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.colors.bgBlackRgba};
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);
  z-index: 10;
  & svg {
    flex-shrink: 0;
  }
`;

const Line = styled.div`
  padding: 3px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 14px;
  }
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  position: fixed;
  min-height: 100vh;
  height: 100%;
  left: -100%;
  padding: 20px 30px 20px;
  top: 59px;
  transition: 0.3s ease-in-out;
  &.open {
    left: 0;
  }
  background-color: ${({ theme }) => theme.colors.bgBlackRgba};
  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
    position: relative;
    background: transparent;
    padding: 0;
    height: auto;
    min-height: 0;
    left: 0;
    top: 0;
  }
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
`;

const LanguageBlockMob = styled.div`
  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  }
`;

const LanguageBlockDesk = styled.div`
  display: none;
  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
  }
`;

const LogoWrap = styled(Link)`
  & svg {
    width: 133px;
    ${({ theme }) => theme.mediaQueries.lg} {
      width: 153px;
    }
  }
`;

export default Header;
