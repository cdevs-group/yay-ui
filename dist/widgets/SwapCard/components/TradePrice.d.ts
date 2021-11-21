/// <reference types="react" />
export interface TradePriceProps {
    price?: any;
    showInverted: boolean;
    setShowInverted: (showInverted: boolean) => void;
    show?: boolean;
    label?: string;
    formattedPrice?: string;
}
export default function TradePrice({ price, showInverted, setShowInverted, show, label, formattedPrice, }: TradePriceProps): JSX.Element;
