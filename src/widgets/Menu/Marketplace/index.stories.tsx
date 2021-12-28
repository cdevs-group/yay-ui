import React from "react";
import noop from "lodash/noop";
import { BrowserRouter } from "react-router-dom";
import { linksSubmenu } from "../config";
import { useState } from "react";
import { BNB2, YAY_TOKEN } from "../../../constants/images";
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
    title: "My wallet",
    copied: "Copied",
    totalBalance: "Total balance",
    myFunds: "My funds",
    myProfile: "My profile",
    favorities: "Favorities",
    myCollections: "My collections",
    linkMyProfile: "",
    linkFavorities: "",
    linkMyCollections: "",
    comingSoon: "Coming soon",
    disconnect: "Disconnect",
    achievements: "Profile Achievements",
  };

  const textsConnect = {
    title: "Сonnect wallet",
    link: "Learn how connect",
  };
  const [network, setNetwork] = useState(NETWORK_CHAIN[0]);

  const handleToggleNetwork = (val) => {
    setNetwork(NETWORK_CHAIN.find((el) => el.chainId === val));
  };

  const funds = [
    {
      id: "1",
      icon: YAY_TOKEN,
      currencyName: "YAY",
      currencyFullName: "YAY Games",
      balance: "100,500.0001 YAY",
      balanceDollars: "$23,313.81",
      includes: [
        {
          id: "1-1",
          icon: YAY_TOKEN,
          currencyName: "YAY (BSC)",
          currencyFullName: "YAY Games",
          balance: "100,500.0001 YAY",
          balanceDollars: "$23,313.81",
        },
        {
          id: "1-2",
          icon: YAY_TOKEN,
          currencyName: "YAY (AVAX)",
          currencyFullName: "YAY Games",
          balance: "100,500.0001 YAY",
          balanceDollars: "$23,313.81",
        },
      ],
    },
    {
      id: "2",
      icon: BNB2,
      currencyName: "BNB",
      currencyFullName: "BSC",
      balance: "100,500.0001 YAY",
      balanceDollars: "$23,313.81",
    },
    {
      id: "3",
      icon: BNB2,
      currencyName: "AVAX",
      currencyFullName: "Avalanche",
      balance: "0.00001 AVAX",
      balanceDollars: "$23,313.81",
    },
  ];

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
          linkTextNetwork="Learn how connect"
          linkHrefNetwork="http"
          titleNetwork="Choose network"
          listNetwork={NETWORK_CHAIN}
          hrefLearnHow="http://"
          totalBalance="$232,001.76"
          funds={funds}
          disclaimer
          disclaimerText="Always make sure the URL is https://www.yay.games/ - Press CTRL+D or CMD+D to bookmark it to be safe. Telegram: https://t.me/yay_games"
        />
      </div>
    </BrowserRouter>
  );
};
