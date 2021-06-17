import React from "react";
import { Round } from "./types";
interface ExpiredCardProps {
    round: Round;
    payot: string;
    up: boolean;
    lockPrice: string;
    prizePool: string;
    closePrice: string;
    priceDifference: string;
}
declare const ExpiredCard: React.FC<ExpiredCardProps>;
export default ExpiredCard;
