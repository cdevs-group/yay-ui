import React from "react";
import { UnsupportedCurrencyFooterProps } from "./components/UnsupportedCurrencyFooter";
import { AddressInputPanelProps } from "./components/AddressInputPanel";
import { ConfirmSwapModalProps } from "./components/ConfirmSwapModal";
import { CurrencyInputPanelProps } from "../../components/CurrencyInputPanel";
import { TradePriceProps } from "./components/TradePrice";
import { ProgressCirclesProps } from "./components/ProgressSteps";
import { AdvancedSwapDetailsProps } from "./components/AdvancedSwapDetails";
import { AppHeaderProps } from "./components/App/types";
import { TransactionsModalProps } from "./components/App/Transactions/TransactionsModal";
import { TransactionDetailsProps } from "./components/App/Transactions/types";
import { InjectedModalProps } from "../Modal";
import { TransactionSubmittedContentProps } from "./components/TransactionConfirmationModal";
interface SwapCardProps {
    currencyInputPanelFrom: CurrencyInputPanelProps;
    currencyInputPanelTo: CurrencyInputPanelProps;
    appHeader: TransactionsModalProps & TransactionDetailsProps & AppHeaderProps & {
        onDismiss: () => void;
    };
    ArrowDownIconComponent: {
        onClick: () => void;
        color: string;
    };
    AddressInputPanelComponent: AddressInputPanelProps;
    AdvancedSwapDetailsDropdownComponent: AdvancedSwapDetailsProps;
    ConnectWalletButton: React.ReactNode;
    swapIsUnsupported: boolean;
    showWrap: boolean;
    noRoute: boolean;
    showApproveFlow: boolean;
    showFooter: boolean;
    trade: any;
    account?: any;
    allowedSlippage: number;
    UnsupportedCurrencyFooterComponent: UnsupportedCurrencyFooterProps;
    texts: {
        removeSendButton: string;
        priceLabel: string;
        slippageToleranceLabel: string;
        unsupportedAssetButton: string;
        wrapOrUnwrapButton: string;
        approvalButton: string;
        priceImpactSeverityButton: string;
        liquidityText: string;
        priceImpactSeverityButtonError: string;
        recipientButton: string;
    };
    TradePriceComponent: TradePriceProps;
    ProgressStepsComponent: ProgressCirclesProps;
    SwapCallbackErrorText: string;
    ConfirmSwapModalComponent: InjectedModalProps & ConfirmSwapModalProps & TransactionSubmittedContentProps;
}
export default function Swap({ currencyInputPanelFrom, currencyInputPanelTo, appHeader, AddressInputPanelComponent, AdvancedSwapDetailsDropdownComponent, ArrowDownIconComponent, showWrap, noRoute, showApproveFlow, showFooter, trade, account, allowedSlippage, swapIsUnsupported, UnsupportedCurrencyFooterComponent, ConnectWalletButton, texts, TradePriceComponent, ProgressStepsComponent, SwapCallbackErrorText, ConfirmSwapModalComponent, }: SwapCardProps): JSX.Element;
export {};
