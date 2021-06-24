import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Logo";
import { NavProps } from "../types";
import Account from "./Account";
import MenuLink from "./MenuLink";
import LanguageSelect from "./LanguageSelect";

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

  return (
    <HeaderWrap>
      {/* <Link> */}
      <Line>
        <Logo />
        {/* </Link> */}
        <Nav>
          {links.map((item, i) => (
            <MenuLink
              key={i}
              // className={item.url === location.pathname ? "active" : ""}
              size="md"
              name={item.name}
              url={item.url}
            />
          ))}
        </Nav>
        <RightContent>
          <LanguageSelect currentLang={currentLang} />
          <Account account={account} login={login} logout={logout} />
        </RightContent>
      </Line>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  position: fixed;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgBlackRgba};
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);
  z-index: 10;
  & svg {
    flex-shrink: 0;
  }
`;
const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding: 14px 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 24px;
    padding-right: 24px;
  }
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightContent = styled.div`
  display: flex;
`;

export default Header;
