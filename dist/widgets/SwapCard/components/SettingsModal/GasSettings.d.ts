/// <reference types="react" />
declare const GasSettings: ({ activeTabGas, title, gasTabs, setGasPrice, }: {
    activeTabGas: number | null;
    title?: string | undefined;
    setGasPrice: any;
    gasTabs: string[];
}) => JSX.Element;
export default GasSettings;
