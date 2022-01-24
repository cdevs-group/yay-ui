import React, { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { NavMarketplaceProps } from "../types";
import AccountMarketplace from "./AccountMarketplace";
import Burger from "../components/Burger";
import Logo from "../image/Logo.png";
import Network from "../components/Network";
import Disclaimer from "../../../components/Disclaimer/Disclaimer";
import MenuLinkDropdown from "../components/MenuLinkDropdown";
import { Languages } from "../../../components/DropDown";

const HeaderMarketplace: React.FC<NavMarketplaceProps> = ({
  account,
  login,
  logout,
  langs,
  setLang,
  currentLang,
  links,
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
  disclaimer,
  disclaimerText,
  totalBalance,
  funds,
  linksViews,
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [heightDisclaimer, setHeightDisclaimer] = useState(0);
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
      {disclaimer ? <Disclaimer text={disclaimerText || ""} setHeight={setHeightDisclaimer} /> : null}
      <Content>
        <Line>
          <LogoWrap to={linkLogo}>
            <img src={Logo} alt="" />
          </LogoWrap>
          <Nav className={openMenu ? "open" : ""} heightDisclaimer={heightDisclaimer}>
            {links?.map((item, i) => (
              <MenuLinkDropdown
                key={i}
                name={item.name}
                url={item.url}
                submenu={item.submenu}
                setOpenMenu={setOpenMenu}
                variant="behind"
                comingSoon={item.comingSoon}
              />
            ))}
            {currentLang && (
              <LanguageBlockMob>
                <Languages currentLang={currentLang} setLang={setLang} langs={langs} />
              </LanguageBlockMob>
            )}
          </Nav>
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
            <AccountMarketplace
              account={account}
              login={login}
              logout={logout}
              textsAccount={textsAccount}
              textsConnect={textsConnect}
              hrefLearnHow={hrefLearnHow}
              network={network}
              totalBalance={totalBalance}
              funds={funds}
              heightDisclaimer={heightDisclaimer}
              linksViews={linksViews}
            />
            {currentLang && (
              <LanguageBlockDesk>
                <Languages currentLang={currentLang} setLang={setLang} langs={langs} />
              </LanguageBlockDesk>
            )}
            <Burger open={openMenu} onClick={() => setOpenMenu(!openMenu)} />
          </RightContent>
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

const Nav = styled.div<{ heightDisclaimer?: number }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  position: fixed;
  min-height: 100vh;
  height: 100%;
  left: -100%;
  padding: ${({ heightDisclaimer }) => (heightDisclaimer ? `calc(${heightDisclaimer + 20}px) 30px` : "20px 30px 20px")};
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

export default HeaderMarketplace;
