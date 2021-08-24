import { ReactNode } from "react";
export interface BridgeStep1Props {
    onUserInput: (input: any) => void;
    value: string | number;
    inputError?: boolean;
    handleButtonToMax: any;
    texts: {
        avalanche?: string;
        bsc?: string;
        from: string;
        to: string;
        fee: string;
        button: string;
    };
    balanceText: {
        message1: string;
        message2: string;
    };
    fee: string;
    fromChange: boolean;
    switchHandler: () => void;
    handleButton: any;
}
export interface BridgeStep2Props {
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
    isLoadTime: boolean;
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
    addTokenHandler: () => void;
    BSCSkanHandler: () => void;
    onDismiss: () => void | undefined;
    texts: {
        title: string;
        description: string;
    };
    textsProof: {
        proof: string;
        wrapped: string;
    };
    ProofOfAssetsData: Array<{
        proofData: proofData;
        wrappedData: Array<proofData>;
    }>;
    tokenLogo?: ReactNode;
}
export interface InfoWrapperProps {
    tokenLogo?: ReactNode;
    proofData: proofData;
    wrappedData: Array<proofData>;
    textsProof: {
        proof: string;
        wrapped: string;
    };
    addTokenHandler: () => void;
    BSCSkanHandler: () => void;
}
interface proofData {
    address: string;
    network: string;
    token: string;
    textCopy: string;
}
export {};
