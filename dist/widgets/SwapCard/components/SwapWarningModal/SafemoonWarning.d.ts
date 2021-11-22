/// <reference types="react" />
export interface SafemoonWarningProps {
    texts: {
        tradeSafeMoon: string;
        clickSettingIcon: string;
        slippageToleranceSetting: string;
        feeTransaction: string;
        feeFivePercentAllHolders: string;
        feeFivePercentAddLiquidity: string;
    };
}
declare const SafemoonWarning: ({ texts }: SafemoonWarningProps) => JSX.Element;
export default SafemoonWarning;
