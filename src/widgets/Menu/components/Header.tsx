import React, { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { NavProps } from "../types";
import Account from "./Account";
import Burger from "./Burger";
import Languages from "../../../components/DropDown/Languages";
import Logo from "../image/Logo.png";
import Network from "./Network";
import Disclaimer from "../../../components/Disclaimer/Disclaimer";
import MenuLinkDropdown from "./MenuLinkDropdown";

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
  textConnect,
  textsAccount,
  textsConnect,
  hrefLearnHow,
  linkLogo,
  network,
  handleToggleNetwork,
  linkTextNetwork,
  linkHrefNetwork,
  titleNetwork,
  valuesNetworks,
  listNetwork,
  vesting,
  yayBalance,
  dataTransactions,
  handleClaimed,
  bridge,
  textsBridge,
  transactionsList,
  handleAddToken,
  disclaimer,
  disclaimerText,
  marginContent,
  minHeight,
  buttonLogoutType,
  linkExternalWalletModal,
}) => {
  const [openMenu, setOpenMenu] = useState(false);

  const refSelect = useRef<any>(null);

  const handleClickOutside = useCallback(
    (e) => {
      if (refSelect.current !== e.target && refSelect.current && !refSelect.current.contains(e.target)) {
        setOpenMenu(false);
      }
    },
    [setOpenMenu]
  );

  useEffect(() => {
    if (document && refSelect && refSelect.current) {
      document.addEventListener("mousedown", handleClickOutside, false);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, false);
    };
  }, [refSelect, handleClickOutside]);

  return (
    <HeaderWrap ref={refSelect}>
      {disclaimer ? <Disclaimer text={disclaimerText || ""} /> : null}
      <Content>
        <Line>
          <LogoWrap to={linkLogo}>
            <img src={Logo} alt="" />
          </LogoWrap>
          <Nav className={openMenu ? "open" : ""}>
            {links?.map((item, i) => (
              <MenuLinkDropdown
                key={i}
                name={item.name}
                url={item.url}
                submenu={item.submenu}
                setOpenMenu={setOpenMenu}
              />
            ))}
            {currentLang && (
              <LanguageBlockMob>
                <Languages currentLang={currentLang} setLang={setLang} langs={langs} />
              </LanguageBlockMob>
            )}
          </Nav>
          {textsAccount && textsConnect && (
            <RightContent>
              {network ? (
                <Network
                  titleNetwork={titleNetwork}
                  linkHrefNetwork={linkHrefNetwork}
                  linkTextNetwork={linkTextNetwork}
                  handleToggleNetwork={handleToggleNetwork}
                  network={network}
                  valuesNetworks={valuesNetworks}
                  listNetwork={listNetwork}
                />
              ) : null}
              <Account
                text={textConnect || "Connect"}
                account={account}
                login={login}
                logout={logout}
                textsAccount={textsAccount}
                textsConnect={textsConnect}
                hrefLearnHow={hrefLearnHow}
                network={network}
                vesting={vesting}
                bridge={bridge}
                yayBalance={yayBalance}
                dataTransactions={dataTransactions}
                handleClaimed={handleClaimed}
                textsBridge={textsBridge}
                transactionsList={transactionsList}
                handleAddToken={handleAddToken}
                marginContent={marginContent}
                minHeight={minHeight}
                buttonLogoutType={buttonLogoutType}
                linkExternalWalletModal={linkExternalWalletModal}
              />
              {currentLang && (
                <LanguageBlockDesk>
                  <Languages currentLang={currentLang} setLang={setLang} langs={langs} />
                </LanguageBlockDesk>
              )}
              <Burger open={openMenu} onClick={() => setOpenMenu(!openMenu)} />
            </RightContent>
          )}
          {!textsConnect && !textsConnect && (
            <RightContent>
              {" "}
              {currentLang && (
                <LanguageBlockDesk>
                  <Languages currentLang={currentLang} setLang={setLang} langs={langs} />
                </LanguageBlockDesk>
              )}
              <Burger open={openMenu} onClick={() => setOpenMenu(!openMenu)} />
            </RightContent>
          )}
        </Line>
      </Content>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 10;

  & svg {
    flex-shrink: 0;
  }
`;
const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.bgBlackRgba};
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);
`;

const Line = styled.div`
  padding: 15px 15px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;

  ${({ theme }) => theme.mediaQueries.xl} {
    padding: 21px 15px 15px;
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

  ${({ theme }) => theme.mediaQueries.xl} {
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
  ${({ theme }) => theme.mediaQueries.xl} {
    display: none;
  }
`;

const LanguageBlockDesk = styled.div`
  display: none;

  ${({ theme }) => theme.mediaQueries.xl} {
    display: block;
    margin-left: 11px;
  }
`;

const LogoWrap = styled(NavLink)`
  display: flex;
  align-items: center;

  & img {
    width: 79px;
    height: 34px;
  }

  & svg {
    width: 133px;

    ${({ theme }) => theme.mediaQueries.xl} {
      width: 153px;
    }
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    & img {
      width: auto;
      height: auto;
    }
  }
`;

export default Header;
