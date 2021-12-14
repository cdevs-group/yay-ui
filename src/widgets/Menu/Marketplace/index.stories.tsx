import React from "react";
import noop from "lodash/noop";
import { BrowserRouter } from "react-router-dom";
import { linksSubmenu } from "../config";
import { useState } from "react";
import { BNB2 } from "../../../constants/images";
import { Avalanche } from "../../../constants/images";
import HeaderMarketplace from "./HeaderMarketplace";

export default {
  title: "Components/Header/HeaderMarketplace",
  component: HeaderMarketplace,
  argTypes: { isAuth: Boolean },
};

const NETWORK_CHAIN = [
  {
    name: "Binance",
    icon: BNB2,
    chainId: "56",
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "BNB",
      symbol: "bnb",
      decimals: 18,
    },
    rpcUrls: [
      "https://bsc-dataseed1.ninicoin.io",
      "https://bsc-dataseed1.defibit.io",
      "https://bsc-dataseed.binance.org",
    ],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  {
    name: "AVAX",
    icon: Avalanche,
    chainId: "43114",
    chainName: "AVAX Mainnet",
    nativeCurrency: {
      name: "AVAX",
      symbol: "avax",
      decimals: 18,
    },
    rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
    blockExplorerUrls: ["https://cchain.explorer.avax.network/"],
  },
];

export const HeaderForMarketplace = () => {
  const langs = [
    { locale: "en-US", language: "English", code: "en" },
    { locale: "de-DE", language: "Deutsch", code: "de" },
  ];

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
    addToken: "Add token",
  };

  const textsConnect = {
    title: "Сonnect wallet",
    link: "Learn how connect",
  };
  const [network, setNetwork] = useState(NETWORK_CHAIN[0]);

  const handleToggleNetwork = (val) => {
    setNetwork(NETWORK_CHAIN.find((el) => el.chainId === val));
  };

  return (
    <BrowserRouter>
      <div style={{ marginTop: "50px" }}>
        <HeaderMarketplace
          account="0xbdda50183d817c3289f895a4472eb475967dc980"
          login={noop}
          logout={noop}
          langs={langs}
          setLang={noop}
          currentLang="EN"
          links={linksSubmenu}
          profile={{
            profileLink: "/profile",
            noProfileLink: "/no-profile",
          }}
          textsAccount={textsAccount}
          textsConnect={textsConnect}
          linkLogo="/"
          network={network}
          handleToggleNetwork={handleToggleNetwork}
        />
      </div>
    </BrowserRouter>
  );
};
