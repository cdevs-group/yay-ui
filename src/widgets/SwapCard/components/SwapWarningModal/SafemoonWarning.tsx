import React from "react";
import { Text } from "../../../../components/Text";

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

const SafemoonWarning = ({ texts }: SafemoonWarningProps) => {
  const {
    tradeSafeMoon,
    clickSettingIcon,
    slippageToleranceSetting,
    feeTransaction,
    feeFivePercentAllHolders,
    feeFivePercentAddLiquidity,
  } = texts;

  return (
    <>
      <Text color="redBg">{tradeSafeMoon} </Text>
      <Text color="redBg">• {clickSettingIcon}</Text>
      <Text mb="24px" color="redBg">
        • {slippageToleranceSetting}
      </Text>
      <Text color="redBg">{feeTransaction}</Text>
      <Text color="redBg">• {feeFivePercentAllHolders}</Text>
      <Text color="redBg">• {feeFivePercentAddLiquidity}</Text>
    </>
  );
};

export default SafemoonWarning;
