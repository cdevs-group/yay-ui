/// <reference types="react" />
declare const NetworksTabs: ({ networksTab, currentNetwork, onClick, }: {
    networksTab: {
        value: string | number;
        img: string;
    }[];
    currentNetwork: string | number;
    onClick: (e: any) => void;
}) => JSX.Element;
export default NetworksTabs;
