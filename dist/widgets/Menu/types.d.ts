import { Variant } from "../../components/Button/types";
import { Login } from "../WalletModal/types";
import { TextsAccount, TextsConnect } from "../WalletModal/useWalletModal";
import { Variant as VariantDropdown } from "../../components/DropDown/types";
import { ReactNode } from "react";
export declare const sizes: {
    readonly MD: "md";
    readonly LG: "lg";
    readonly XL: "xl";
    readonly XXL: "xxl";
};
export interface LinkHeaderProps {
    name: string;
    className?: string;
    url: string;
    setOpenMenu: (val: boolean) => void;
    submenu?: MenuEntry[];
    openDropdown?: boolean;
    setOpenDropdown?: (val: boolean) => void | undefined;
    variant?: VariantDropdown;
    comingSoon?: string;
}
export interface AccProps {
    isAuth: boolean;
    accName?: string;
}
export interface Profile {
    username?: string;
    image?: string;
    profileLink: string;
    noProfileLink: string;
    showPip?: boolean;
}
export interface Language {
    code: string;
    language: string;
    locale: string;
}
export interface MenuEntry {
    name: string;
    url: string;
    submenu?: MenuEntry[];
    comingSoon?: string;
}
export interface LangType {
    code: string;
    language: string;
}
export interface PanelProps {
    isDark?: boolean;
    toggleTheme?: (isDark: boolean) => void;
    currentLang?: string;
    langs?: LangType[];
    setLang?: (lang: LangType) => void;
    links?: Array<MenuEntry>;
}
interface textsBridge {
    titleModal: string;
    title: string;
    network: string;
    wallet: string;
    newtworkName: string;
    walletName: string;
    button: string;
    completeText: string;
    noRecentTransactions?: string;
    transactionTitle?: string;
    tabsList?: Array<string>;
}
interface Itransactions {
    number: string;
    link: string;
    status: boolean;
    profit: string;
    linkHref: string;
}
export interface NavProps extends PanelProps {
    account?: string;
    login: Login;
    profile?: Profile;
    logout: () => void;
    textConnect?: string;
    textsConnect?: TextsConnect;
    textsAccount?: TextsAccount;
    hrefLearnHow?: string;
    linkLogo: string;
    network?: BlockChainNetwork;
    titleNetwork?: string;
    linkTextNetwork?: string;
    linkHrefNetwork?: string;
    handleToggleNetwork?: (e: any) => void;
    valuesNetworks?: string[];
    listNetwork?: BlockChainNetwork[];
    vesting?: boolean;
    yayBalance?: string | number;
    dataTransactions?: Array<any>;
    handleClaimed?: (value: string) => void;
    bridge?: boolean;
    textsBridge?: textsBridge;
    transactionsList?: Array<Itransactions> | [];
    handleAddToken?: () => void;
    disclaimer?: boolean;
    disclaimerText?: string;
    marginContent?: string;
    minHeight?: string;
    buttonLogoutType?: Variant;
    linkExternalWalletModal?: string;
}
export declare type BlockChainNetwork = {
    name: string;
    icon?: string;
    chainId: string;
    chainName: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
    rpcUrls: string[];
    blockExplorerUrls: string[];
};
export interface TextsAccountMarketplace {
    title: string;
    copied: string;
    totalBalance: string;
    myFunds: string;
    myProfile: string;
    favorities: string;
    myCollections: string;
    comingSoon: string;
    disconnect: string;
    achievements?: string;
    linkMyProfile?: string;
    linkFavorities?: string;
    linkMyCollections?: string;
    linkAchievements?: string;
}
export interface Funds {
    id: string;
    icon: string;
    currencyName: string | ReactNode;
    currencyFullName: string;
    balance: string;
    balanceDollars: string;
    includes?: Funds[];
}
export interface NavMarketplaceProps extends PanelProps {
    account: string;
    login: Login;
    profile?: Profile;
    logout: () => void;
    textsConnect: TextsConnect;
    textsAccount: TextsAccountMarketplace;
    hrefLearnHow: string;
    linkLogo: string;
    network: BlockChainNetwork;
    titleNetwork: string;
    linkTextNetwork: string;
    linkHrefNetwork: string;
    handleToggleNetwork: (e: any) => void;
    valuesNetworks?: string[];
    listNetwork: BlockChainNetwork[];
    disclaimer?: boolean;
    disclaimerText?: string;
    totalBalance: string;
    funds: Funds[];
    linksViews?: NavMarketplaceLinksViewsProps[];
    logoImg?: string;
}
export interface NavMarketplaceLinksViewsProps {
    icon: React.ReactNode;
    text: string;
    link: string;
    comingSoon?: boolean;
    notice?: number | string;
}
export {};
