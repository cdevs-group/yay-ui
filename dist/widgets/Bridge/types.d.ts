import { ReactNode } from "react";
import { ButtonProps } from "../../components/Button";
export interface BridgeStep1Props {
    onUserInput: (input: any) => void;
    value: string | number;
    inputError?: boolean;
    handleButtonToMax: any;
    iconBalanceInput?: ReactNode;
    handleOpenProofOfAssets: () => void;
    handleOpenTransactionsHistory: () => void;
    iconNetwork1?: ReactNode;
    iconNetwork2?: ReactNode;
    texts: {
        nameNetwork1?: string;
        nameNetwork2?: string;
        from: string;
        to: string;
        error: string;
        button: string;
        buttonProofOfState?: string;
        buttonTransactionsHistory?: string;
        currencyInput: string;
        commit: string;
    };
    balanceText: {
        message1: string;
        message2: string;
    };
    handleToggleNetwork: (val: any) => void;
    handleButton: any;
    disabledInput?: boolean;
    disabledButton?: boolean;
    propsButton?: ButtonProps;
}
export interface BridgeStep2Props {
    onDismiss?: () => void;
    stepsText: Array<string>;
    WalletIcon?: ReactNode;
    BlockChainFrom?: ReactNode;
    BlockChainTo?: ReactNode;
    isLoadGas?: boolean;
    TokenIcon?: ReactNode;
    isErrorProgress?: boolean;
    progress1: number;
    isError?: boolean;
    timer1: number;
    timer2: number;
    isLoadGasNetwork1: boolean;
    isLoadGasNetwork2: boolean;
    isLoadTimeNetwork2: boolean;
    isLoadTimeNetwork1: boolean;
    gasPriceTextNetwork1?: {
        value: string;
        fiat: string;
    };
    gasPriceTextNetwork2?: {
        value: string;
        fiat: string;
    };
    textsProgress1: {
        waiting: string;
        confirmations: string;
        checkIt: string;
        error: string;
        start: string;
        step1: string;
        step2: string;
        finish: string;
    };
    textsProgress2: {
        waiting: string;
        start: string;
        final: string;
        networkWaiting: string;
    };
    progress2: number;
    texts: {
        title: string;
        token: string;
        addToken: string;
        amount: string;
        network: string;
        timer: string;
        coast: string;
        bsc?: string;
        avalanche?: string;
    };
    transferredValue: {
        fiat: string;
        token: string;
    };
    addTokenHandler: () => void;
}
export interface BrightProofProps {
    addTokenIcon?: ReactNode;
    addTokenHandler: () => void;
    textCopy: string;
    onDismiss: () => void | undefined;
    texts: {
        title: string;
        description: string;
    };
    ProofOfAssetsData: Array<{
        proofData: proofData;
        wrappedData: Array<proofData>;
    }>;
    tokenLogo?: ReactNode;
    tokenName?: string;
}
export interface InfoWrapperProps {
    addTokenIcon?: ReactNode;
    tokenLogo?: ReactNode;
    proofData: proofData;
    wrappedData: Array<proofData>;
    addTokenHandler: () => void;
    textCopy: string;
    tokenName?: string;
}
interface proofData {
    address: string;
    network: string;
    token: string;
    link: string;
    title: string;
}
export {};
