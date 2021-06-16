import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import { NavProps } from "../types";
import Account from "./Account";
import MenuLink from "./MenuLink";

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
  return (
    <HeaderWrap>
      {/* <Link> */}
      <Logo />
      {/* </Link> */}
      <Nav>
        {links.map((item, i) => (
          <React.Fragment key={i}>
            <MenuLink
              className={item.url === location.pathname ? "active" : ""}
              size="md"
              name={item.name}
              url={item.url}
            />
          </React.Fragment>
        ))}
      </Nav>
      <Account account={account} login={login} logout={logout} />
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 144px;
  background-color: ${({ theme }) => theme.colors.bgBlackRgba};
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);
  & svg {
    /* flex-grow: 0; */
    flex-shrink: 0;
  }
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Header;
