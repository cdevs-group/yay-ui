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
  const [network, setNetwork] = useState("Binance");
  const handleToggleNetwork = (val) => {
    setNetwork(val);
  };
  const textsAccount = {
    copy: "Copy",
    title: "Your wallet",
    button: "Logout",
    view: "View on BscScan",
    copied: "Copied",
    yayBalance: "$YAY balance",
    address: "Your address",
    tabs: ["Wallet", "Transactions"],
    recentTransactions: "Recent transactions",
    claimed: "Claimed",
  };

  const textsConnect = {
    title: "Сonnect wallet",
    link: "Learn how connect",
  };

  const dataTransactions = [
    { id: "001", value: "+12,000,00 $YAY" },
    { id: "002", value: "+12,000,00 $YAY" },
    { id: "003", value: "+12,000,00 $YAY" },
    { id: "004", value: "+12,000,00 $YAY" },
  ];

  return (
    <BrowserRouter>
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
          textsAccount={textsAccount}
          textsConnect={textsConnect}
          linkLogo="/"
        />
      </div>
    </BrowserRouter>
  );
};

export const HeaderNetwork: React.FC = () => {
  const langs = [
    { locale: "en-US", language: "English", code: "en" },
    { locale: "de-DE", language: "Deutsch", code: "de" },
  ];
  const [network, setNetwork] = useState("Binance");

  const handleToggleNetwork = (val) => {
    setNetwork(val);
  };
  const textsAccount = {
    copy: "Copy",
    title: "Your wallet",
    button: "Logout",
    view: "View on BscScan",
    copied: "Copied",
    yayBalance: "$YAY balance",
    address: "Your address",
    tabs: ["Wallet", "Transactions"],
    recentTransactions: "Recent transactions",
    claimed: "Claimed",
  };

  const textsConnect = {
    title: "Сonnect wallet",
    link: "Learn how connect",
  };

  const dataTransactions = [
    { id: "001", value: "+12,000,00 $YAY" },
    { id: "002", value: "+12,000,00 $YAY" },
    { id: "003", value: "+12,000,00 $YAY" },
    { id: "004", value: "+12,000,00 $YAY" },
  ];

  return (
    <BrowserRouter>
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
          handleToggleNetwork={handleToggleNetwork}
          linkTextNetwork="Learn how connect"
          linkHrefNetwork="http"
          titleNetwork="Choose network"
          textsAccount={textsAccount}
          textsConnect={textsConnect}
          linkLogo="/"
          valuesNetworks={["BSC", "AVAX"]}
          network1Text={"network1Text"}
          network2Text={"network2Text"}
        />
      </div>
    </BrowserRouter>
  );
};

export const HeaderVesting: React.FC = () => {
  const langs = [
    { locale: "en-US", language: "English", code: "en" },
    { locale: "de-DE", language: "Deutsch", code: "de" },
  ];
  const [network, setNetwork] = useState("Binance");
  const handleToggleNetwork = (val) => {
    setNetwork(val);
  };
  const textsAccount = {
    copy: "Copy",
    title: "Your wallet",
    button: "Logout",
    view: "View on BscScan",
    copied: "Copied",
    yayBalance: "$YAY balance",
    address: "Your address",
    tabs: ["Wallet", "Transactions"],
    recentTransactions: "Recent transactions",
    claimed: "Claimed",
    noRecentTransactions: "No recent transactions",
  };

  const textsConnect = {
    title: "Сonnect wallet",
    link: "Learn how connect",
  };

  const dataTransactions = [
    { id: "001", value: "+12,000,00 $YAY" },
    { id: "002", value: "+12,000,00 $YAY" },
    { id: "003", value: "+12,000,00 $YAY" },
    { id: "004", value: "+12,000,00 $YAY" },
  ];

  return (
    <BrowserRouter>
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
          handleToggleNetwork={handleToggleNetwork}
          linkTextNetwork="Learn how connect"
          linkHrefNetwork="http"
          titleNetwork="Choose network"
          textsAccount={textsAccount}
          textsConnect={textsConnect}
          linkLogo="/"
          vesting
          yayBalance="25000000"
          dataTransactions={dataTransactions}
          handleClaimed={(value) => console.log(value)}
        />
      </div>
    </BrowserRouter>
  );
};

export const HeaderVestingNoTransactions: React.FC = () => {
  const langs = [
    { locale: "en-US", language: "English", code: "en" },
    { locale: "de-DE", language: "Deutsch", code: "de" },
  ];
  const [network, setNetwork] = useState("Binance");
  const handleToggleNetwork = (val) => {
    setNetwork(val);
  };
  const textsAccount = {
    copy: "Copy",
    title: "Your wallet",
    button: "Logout",
    view: "View on BscScan",
    copied: "Copied",
    yayBalance: "$YAY balance",
    address: "Your address",
    tabs: ["Wallet", "Transactions"],
    recentTransactions: "Recent transactions",
    claimed: "Claimed",
    noRecentTransactions: "No recent transactions",
  };

  const textsConnect = {
    title: "Сonnect wallet",
    link: "Learn how connect",
  };

  const dataTransactions = [];

  return (
    <BrowserRouter>
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
          handleToggleNetwork={handleToggleNetwork}
          linkTextNetwork="Learn how connect"
          linkHrefNetwork="http"
          titleNetwork="Choose network"
          textsAccount={textsAccount}
          textsConnect={textsConnect}
          linkLogo="/"
          vesting
          yayBalance="25000000"
          dataTransactions={dataTransactions}
          handleClaimed={(value) => console.log(value)}
        />
      </div>
    </BrowserRouter>
  );
};
