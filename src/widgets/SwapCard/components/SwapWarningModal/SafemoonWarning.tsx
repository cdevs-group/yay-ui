import React from 'react'
import { Text } from '../../../../components/Text'

export interface SafemoonWarningProps {
  texts: {
    tradeSafeMoon: string
    clickSettingIcon: string
    slippageToleranceSetting: string
    feeTransaction: string
    feeFivePercentAllHolders: string
    feeFivePercentAddLiquidity: string
  }
}

const SafemoonWarning = ({ texts }: SafemoonWarningProps) => {

  const { 
    tradeSafeMoon,
    clickSettingIcon,
    slippageToleranceSetting,
    feeTransaction,
    feeFivePercentAllHolders,
    feeFivePercentAddLiquidity
   } = texts

  return (
    <>
      <Text>{tradeSafeMoon} </Text>
      <Text>• {clickSettingIcon}</Text>
      <Text mb="24px">• {slippageToleranceSetting}</Text>
      <Text>{feeTransaction}</Text>
      <Text>• {feeFivePercentAllHolders}</Text>
      <Text>• {feeFivePercentAddLiquidity}</Text>
    </>
  );
};

export default SafemoonWarning;
