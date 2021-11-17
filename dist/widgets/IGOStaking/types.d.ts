export interface IGOTopListProps {
    texts: {
        title: string;
        wallet: string;
        staked: string;
        tokenName: string;
    };
    topUsersList: Array<{
        position: string | number;
        staked: string;
        wallet: string;
    }>;
    myWallet: string;
    tabsList?: string[];
    activeTab?: number;
    toggleTab?: (val: string) => void;
}
