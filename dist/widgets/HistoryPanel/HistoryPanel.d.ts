import React from "react";
import { Bet, InjectedProps } from "./types";
interface Props extends InjectedProps {
    isFetchingHistory?: boolean;
    bets?: Bet[];
    isOpenRound?: boolean;
    isLiveRound?: boolean;
    yourResult?: string;
    canClaim?: string | number;
    roundResult?: string;
}
declare const HistoryPanel: React.FC<Props>;
export default HistoryPanel;
