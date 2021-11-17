import React, { useCallback, useState } from "react";
import CurrencySearch from "./CurrencySearch";
import CurrencySearchModal from "./CurrencySearchModal";
import CurrencyList from "./CurrencyList";
import FixedSizeListRow from "./Row";

export default {
  title: "Widgets/Swap/CurrencyModals",
  argTypes: {},
};

export const CurrencySearchModalBlock = () => {
  enum CurrencyModalView {
    search,
    manage,
    importToken,
    importList,
  }
  const [modalView, setModalView] = useState<CurrencyModalView>(CurrencyModalView.search);
  const prevView = undefined;
  const [importToken, setImportToken] = useState<any>();
  const [listURL, setListUrl] = useState<string | undefined>();

  const config = {
    [CurrencyModalView.search]: { title: "Select a Token", onBack: undefined },
    [CurrencyModalView.manage]: { title: "Manage", onBack: () => setModalView(CurrencyModalView.search) },
    [CurrencyModalView.importToken]: {
      title: "Import Tokens",
      onBack: () =>
        setModalView(prevView && prevView !== CurrencyModalView.importToken ? prevView : CurrencyModalView.search),
    },
    [CurrencyModalView.importList]: { title: "Import List", onBack: () => setModalView(CurrencyModalView.search) },
  };

  const CurrencyListComponent = () => {
    const inactiveTokens = filteredInactiveTokens;
    const chainId = "56";
    const onCurrencySelect = () => {};
    const otherCurrency = undefined;
    const selectedCurrency = {
      decimals: 18,
      symbol: "BNB",
      name: "BNB",
    };
    const breakIndex = undefined; //1,0
    const showImportView = () => {};

    const Row = useCallback(
      ({ data, index, style }) => {
        const currency: any = data[index];

        const isSelected = true;
        const otherSelected = false;
        const handleSelect = () => onCurrencySelect();

        const token = {
          decimals: 18,
          symbol: "ALPACA",
          name: "Alpaca",
          chainId: 56,
          address: "0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F",
          tokenInfo: {
            name: "Alpaca",
            symbol: "ALPACA",
            address: "0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F",
            chainId: 56,
            decimals: 18,
            logoURI: "https://pancakeswap.finance/images/tokens/0x8f0528ce5ef7b51152a59745befdd91d97091d2f.png",
          },
          tags: [],
        };

        const showImport = inactiveTokens && token && Object.keys(inactiveTokens).includes(token.address);

        if (index === breakIndex || !data) {
          return <FixedSizeListRow style={style} texts={{ expanded: "expanded", tokens: "tokens" }} />;
        }

        if (showImport && token) {
          return (
            <></>
            // <ImportRow style={style} token={token} showImportView={showImportView} setImportToken={setImportToken} dim />
          );
        }
        return (
          <></>
          // <CurrencyRow
          //   style={style}
          //   currency={currency}
          //   isSelected={isSelected}
          //   onSelect={handleSelect}
          //   otherSelected={otherSelected}
          // />
        );
      },
      [
        chainId,
        inactiveTokens,
        onCurrencySelect,
        otherCurrency,
        selectedCurrency,
        setImportToken,
        showImportView,
        breakIndex,
      ]
    );

    return (
      <CurrencyList
        row={Row}
        height={390}
        fixedListRef={null}
        currencyKey={() => {}}
        itemData={filteredSortedTokens}
      />
    );
  };

  const CurrencySearchComponent = () => {
    const [valueInput, setValueInput] = useState();

    return (
      <CurrencySearch
        placeholder="placeholder"
        notResultText="No results found."
        checksummedInput={false}
        debouncedQuery={valueInput}
        commonBases={<></>}
        searchTokenIsAdded={false}
        searchToken={undefined}
        onCurrencySelect={() => {}}
        currencyList={<CurrencyListComponent />}
        showCommonBases={false}
        importRow={<></>}
        filteredSortedTokens={filteredSortedTokens}
        filteredInactiveTokens={filteredInactiveTokens}
      />
    );
  };

  return (
    <div>
      <CurrencySearchModal
        onDismiss={() => null}
        config={config}
        modalView={modalView}
        setModalView={setModalView}
        texts={{ manageTokens: "Manage Tokens" }}
        currencySearchComponent={<CurrencySearchComponent />}
        importTokenComponent={<></>}
        importListComponent={<></>}
        manageComponent={<></>}
        importToken={importToken}
        importList={setImportToken}
        listURL={listURL}
      />
    </div>
  );
};
const filteredSortedTokens = [
  {
    decimals: 18,
    symbol: "ALPACA",
    name: "Alpaca",
    chainId: 56,
    address: "0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F",
    tokenInfo: {
      name: "Alpaca",
      symbol: "ALPACA",
      address: "0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F",
      chainId: 56,
      decimals: 18,
      logoURI: "https://pancakeswap.finance/images/tokens/0x8f0528ce5ef7b51152a59745befdd91d97091d2f.png",
    },
    tags: [],
  },
  {
    decimals: 18,
    symbol: "BELT",
    name: "Belt",
    chainId: 56,
    address: "0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f",
    tokenInfo: {
      name: "Belt",
      symbol: "BELT",
      address: "0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f",
      chainId: 56,
      decimals: 18,
      logoURI: "https://pancakeswap.finance/images/tokens/0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f.png",
    },
    tags: [],
  },
  {
    decimals: 18,
    symbol: "BTCB",
    name: "BTCB Token",
    chainId: 56,
    address: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
    tokenInfo: {
      name: "BTCB Token",
      symbol: "BTCB",
      address: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
      chainId: 56,
      decimals: 18,
      logoURI: "https://pancakeswap.finance/images/tokens/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c.png",
    },
    tags: [],
  },
  {
    decimals: 18,
    symbol: "BUNNY",
    name: "Pancake Bunny",
    chainId: 56,
    address: "0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51",
    tokenInfo: {
      name: "Pancake Bunny",
      symbol: "BUNNY",
      address: "0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51",
      chainId: 56,
      decimals: 18,
      logoURI: "https://pancakeswap.finance/images/tokens/0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51.png",
    },
    tags: [],
  },
  {
    decimals: 18,
    symbol: "BUSD",
    name: "BUSD Token",
    chainId: 56,
    address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    tokenInfo: {
      name: "BUSD Token",
      symbol: "BUSD",
      address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
      chainId: 56,
      decimals: 18,
      logoURI: "https://pancakeswap.finance/images/tokens/0xe9e7cea3dedca5984780bafc599bd69add087d56.png",
    },
    tags: [],
  },
  {
    decimals: 18,
    symbol: "CAKE",
    name: "PancakeSwap Token",
    chainId: 56,
    address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
    tokenInfo: {
      name: "PancakeSwap Token",
      symbol: "CAKE",
      address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
      chainId: 56,
      decimals: 18,
      logoURI: "https://pancakeswap.finance/images/tokens/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82.png",
    },
    tags: [],
  },
  {
    decimals: 18,
    symbol: "EPS",
    name: "Ellipsis",
    chainId: 56,
    address: "0xA7f552078dcC247C2684336020c03648500C6d9F",
    tokenInfo: {
      name: "Ellipsis",
      symbol: "EPS",
      address: "0xA7f552078dcC247C2684336020c03648500C6d9F",
      chainId: 56,
      decimals: 18,
      logoURI: "https://pancakeswap.finance/images/tokens/0xa7f552078dcc247c2684336020c03648500c6d9f.png",
    },
    tags: [],
  },
  {
    decimals: 18,
    symbol: "ETH",
    name: "Ethereum Token",
    chainId: 56,
    address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
    tokenInfo: {
      name: "Ethereum Token",
      symbol: "ETH",
      address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
      chainId: 56,
      decimals: 18,
      logoURI: "https://pancakeswap.finance/images/tokens/0x2170ed0880ac9a755fd29b2688956bd959f933f8.png",
    },
    tags: [],
  },
  {
    decimals: 18,
    symbol: "NRV",
    name: "Nerve Finance",
    chainId: 56,
    address: "0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096",
    tokenInfo: {
      name: "Nerve Finance",
      symbol: "NRV",
      address: "0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096",
      chainId: 56,
      decimals: 18,
      logoURI: "https://pancakeswap.finance/images/tokens/0x42f6f551ae042cbe50c739158b4f0cac0edb9096.png",
    },
    tags: [],
  },
  {
    decimals: 9,
    symbol: "SAFEMOON",
    name: "SafeMoon",
    chainId: 56,
    address: "0x8076C74C5e3F5852037F31Ff0093Eeb8c8ADd8D3",
    tokenInfo: {
      name: "SafeMoon",
      symbol: "SAFEMOON",
      address: "0x8076C74C5e3F5852037F31Ff0093Eeb8c8ADd8D3",
      chainId: 56,
      decimals: 9,
      logoURI: "https://pancakeswap.finance/images/tokens/0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3.png",
    },
    tags: [],
  },
  {
    decimals: 18,
    symbol: "TKO",
    name: "TokoCrypto",
    chainId: 56,
    address: "0x9f589e3eabe42ebC94A44727b3f3531C0c877809",
    tokenInfo: {
      name: "TokoCrypto",
      symbol: "TKO",
      address: "0x9f589e3eabe42ebC94A44727b3f3531C0c877809",
      chainId: 56,
      decimals: 18,
      logoURI: "https://pancakeswap.finance/images/tokens/0x9f589e3eabe42ebc94a44727b3f3531c0c877809.png",
    },
    tags: [],
  },
  {
    decimals: 18,
    symbol: "USDT",
    name: "Tether USD",
    chainId: 56,
    address: "0x55d398326f99059fF775485246999027B3197955",
    tokenInfo: {
      name: "Tether USD",
      symbol: "USDT",
      address: "0x55d398326f99059fF775485246999027B3197955",
      chainId: 56,
      decimals: 18,
      logoURI: "https://pancakeswap.finance/images/tokens/0x55d398326f99059ff775485246999027b3197955.png",
    },
    tags: [],
  },
  {
    decimals: 18,
    symbol: "VAI",
    name: "VAI Stablecoin",
    chainId: 56,
    address: "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7",
    tokenInfo: {
      name: "VAI Stablecoin",
      symbol: "VAI",
      address: "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7",
      chainId: 56,
      decimals: 18,
      logoURI: "https://pancakeswap.finance/images/tokens/0x4bd17003473389a42daf6a0a729f6fdb328bbbd7.png",
    },
    tags: [],
  },
  {
    decimals: 18,
    symbol: "WBNB",
    name: "WBNB Token",
    chainId: 56,
    address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    tokenInfo: {
      name: "WBNB Token",
      symbol: "WBNB",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      chainId: 56,
      decimals: 18,
      logoURI: "https://pancakeswap.finance/images/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png",
    },
    tags: [],
  },
  {
    decimals: 18,
    symbol: "XVS",
    name: "Venus",
    chainId: 56,
    address: "0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63",
    tokenInfo: {
      name: "Venus",
      symbol: "XVS",
      address: "0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63",
      chainId: 56,
      decimals: 18,
      logoURI: "https://pancakeswap.finance/images/tokens/0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63.png",
    },
    tags: [],
  },
];

const filteredInactiveTokens = [
  {
    decimals: 18,
    symbol: "YAY",
    name: "YAY Games",
    chainId: 56,
    address: "0x524dF384BFFB18C0C8f3f43d012011F8F9795579",
    tokenInfo: {
      name: "YAY Games",
      symbol: "YAY",
      address: "0x524dF384BFFB18C0C8f3f43d012011F8F9795579",
      chainId: 56,
      decimals: 18,
      logoURI:
        "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x524dF384BFFB18C0C8f3f43d012011F8F9795579/logo.png",
    },
    tags: [],
  },
];
