import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Logo";
import { NavProps } from "../types";
import Account from "./Account";
import MenuLink from "./MenuLink";
import LanguageSelect from "./LanguageSelect";
import Burger from "./Burger";

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
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <HeaderWrap>
      {/* <Link> */}
      <Line>
        <LogoWrap>
          <Logo />
        </LogoWrap>
        {/* </Link> */}
        <Nav className={openMenu ? "open" : ""}>
          {links.map((item, i) => (
            <MenuLink
              key={i}
              // className={item.url === location.pathname ? "active" : ""}
              size="md"
              name={item.name}
              url={item.url}
            />
          ))}
          <LanguageBlockMob>
            <LanguageSelect currentLang={currentLang} />
          </LanguageBlockMob>
        </Nav>
        <RightContent>
          <LanguageBlockDesk>
            <LanguageSelect currentLang={currentLang} />
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
  align-items: center;
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
`;

const LanguageBlockMob = styled.div`
  padding-left: 20px;
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
const Overlay = styled.div`
  pointer-events: none;
  display: block;
  background: ${({ theme }) => theme.colors.overlayBg};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
`;
const LogoWrap = styled.div`
  & svg {
    width: 133px;
    ${({ theme }) => theme.mediaQueries.lg} {
      width: 153px;
    }
  }
`;
export default Header;
