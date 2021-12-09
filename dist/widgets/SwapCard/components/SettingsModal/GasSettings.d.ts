/// <reference types="react" />
declare const GasSettings: ({ activeTabGas, title, gasTabs, setGasPrice, }: {
    activeTabGas: number;
    title?: string | undefined;
    setGasPrice: (cur: number) => void;
    gasTabs: string[];
}) => JSX.Element;
export default GasSettings;
