/// <reference types="react" />
declare const NetworksTabs: ({ networksTab, currentNetwork, onClick, }: {
    networksTab: {
        value: number;
        img: string;
    }[];
    currentNetwork: number;
    onClick: (e: any) => void;
}) => JSX.Element;
export default NetworksTabs;
