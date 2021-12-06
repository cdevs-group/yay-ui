/// <reference types="react" />
interface IGOTopList2YersProps {
    texts: {
        title: string;
        wallet: string;
        staked: string;
        tokenName: string;
        allocation: string;
        tier: string;
        allocationCurrency: string;
    };
    topUsersList: Array<{
        position: string | number;
        tier: string;
        wallet: string;
        stake: string;
        allocation: string | number;
    }>;
    myWallet: string;
    tabsList?: string[];
    activeTab?: number;
    toggleTab?: (val: string) => void;
}
declare const IGOTopList2Yers: ({ topUsersList, texts, activeTab, toggleTab, tabsList, myWallet }: IGOTopList2YersProps) => JSX.Element;
export default IGOTopList2Yers;
