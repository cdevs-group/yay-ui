/// <reference types="react" />
export interface TradePriceProps {
    showInverted: boolean;
    setShowInverted: (showInverted: boolean) => void;
    show?: boolean;
    label?: string;
    formattedPrice?: string;
}
export default function TradePrice({ showInverted, setShowInverted, show, label, formattedPrice }: TradePriceProps): JSX.Element;
