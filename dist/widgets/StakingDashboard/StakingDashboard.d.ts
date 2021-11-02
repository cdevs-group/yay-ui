import React from "react";
import { ButtonProps } from "../../components/Button";
export interface VestingWidgetProps {
    dataClaimTokens: {
        totalRaised: string;
        total: string;
        left?: string;
    };
    textsClaimTokens: {
        title: string;
        button: string;
        totalRaised: string;
        total: string;
        left?: string;
    };
    dataCardsIndicators: {
        text: string;
        value: string;
    }[];
    textMarketplaceLink: string;
    linkMarketplace: string;
    imagesMarketplace?: {
        bg: string;
        mp: string;
    };
    textClaimBlock: {
        title: string;
        description: string;
        button: string;
    };
    canClaim: boolean;
    dataTimer: {
        textFront: string;
        textBack: string;
        textStage: string;
        timeSecond: number;
        totalSeconds: number;
        textsTime: {
            days: string;
            hours: string;
            minutes: string;
            seconds: string;
        };
    };
    disabledTopCards?: boolean;
    disabledCardClaimTokens?: boolean;
    progress: string | number;
    propsBtnClaimTokens?: ButtonProps;
    propsBtnClaimBlock?: ButtonProps;
}
declare const StakingDashboard: React.FC<VestingWidgetProps>;
export default StakingDashboard;
