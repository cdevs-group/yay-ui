import React from "react";
import Header from "./components/Header";
import noop from "lodash/noop";
import { BrowserRouter } from "react-router-dom";
import { links } from "./config";
import { useState } from "react";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: { isAuth: Boolean },
};

export const HeaderDefault: React.FC = () => {
  const langs = [
    { locale: "en-US", language: "English", code: "en" },
    { locale: "de-DE", language: "Deutsch", code: "de" },
  ];
  const [network, setNetwork] = useState('Binance')
  const handleChooseNetwork = (val) => {
    setNetwork(val)
  }
  return (
    <BrowserRouter>
      <div>
        {/* <Header
          account={null}
          login={noop}
          logout={noop}
          isDark
          toggleTheme={noop}
          langs={langs}
          setLang={noop}
          currentLang="EN"
          links={links}
        /> */}
      </div>
      <div style={{ marginTop: "50px" }}>
        <Header
          account="0xbdda50183d817c3289f895a4472eb475967dc980"
          login={noop}
          logout={noop}
          isDark={false}
          toggleTheme={noop}
          langs={langs}
          setLang={noop}
          currentLang="EN"
          links={links}
          profile={{
            profileLink: "/profile",
            noProfileLink: "/no-profile",
          }}
          network={network}
          handleChooseNetwork={handleChooseNetwork}
          linkTextNetwork="Learn how connect"
          linkHrefNetwork="http"
          titleNetwork="Choose network"
        />
      </div>
    </BrowserRouter>
  );
};
