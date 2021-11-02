import React from "react";
export interface VestingWidgetProps {
    dataClaimTokens: {
        totalRaised: string;
        total: string;
        left?: string;
    };
    handleClaimTokens: () => void;
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
    isLoadingButtonClaimTokens?: boolean;
    endIconButtonClaimTokens?: React.ReactNode | null;
    disabledTopCards?: boolean;
    disabledCardClaimTokens?: boolean;
    handleClaimBlock?: () => void;
    endIconButtonClaimBlock?: React.ReactNode | null;
    isLoadingButtonClaimBlock?: boolean;
    progress: string | number;
}
declare const StakingDashboard: React.FC<VestingWidgetProps>;
export default StakingDashboard;
