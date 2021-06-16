import React from "react";
import Header from "./components/Header";
// import { ReactComponent as LogoIcon } from './logo.svg';
import noop from "lodash/noop";
import { BrowserRouter } from "react-router-dom";
import { Language } from "./types";
import { links } from "./config";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: { isAuth: Boolean },
};

export const HeaderDefault: React.FC = () => {
  const accName = "dtyf3465fdv3duy34g87d347irfh34fuy3487fh3f4g34gf87g";
  const langs: Language[] = [...Array(20)].map((_, i) => ({ code: `en${i}`, language: `English${i}` }));

  return (
    <BrowserRouter>
      <div>
        <Header
          account={null}
          login={noop}
          logout={noop}
          isDark
          toggleTheme={noop}
          langs={langs}
          setLang={noop}
          currentLang="EN"
          links={links}
        />
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
        />
      </div>
    </BrowserRouter>
  );
};
