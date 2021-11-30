import React from "react";
import { Flex } from "../../../../components/Box";
import { GAS_PRICE_GWEI } from "./types";
import { TextStyle, TabsWrapBlock, Tab } from "./styles";
import { baseColors } from "../../../../theme/colors";

const GasSettings = ({
  activeTabGas,
  title,
  gasTabs,
  setGasPrice,
}: {
  activeTabGas: number | null;
  title?: string;
  setGasPrice: any;
  gasTabs: string[];
}) => {
  return (
    <Flex flexDirection="column">
      <Flex mb="12px" alignItems="center">
        <TextStyle>{title}</TextStyle>
      </Flex>
      <TabsWrapBlock width="100%" length={3}>
        <Tab
          colorActive={baseColors.green}
          paddingTabs="7px"
          className={activeTabGas === GAS_PRICE_GWEI.default ? "active" : ""}
          value={GAS_PRICE_GWEI.default}
          onClick={() => {
            setGasPrice(GAS_PRICE_GWEI.default);
          }}
          
        >
          {gasTabs[0]}
        </Tab>
        <Tab
          colorActive={baseColors.green}
          paddingTabs="7px"
          className={activeTabGas === GAS_PRICE_GWEI.fast ? "active" : ""}
          value={GAS_PRICE_GWEI.fast}
          onClick={() => {
            setGasPrice(GAS_PRICE_GWEI.fast);
          }}
        >
          {gasTabs[1]}
        </Tab>
        <Tab
          colorActive={baseColors.green}
          paddingTabs="7px"
          className={activeTabGas === GAS_PRICE_GWEI.instant ? "active" : ""}
          value={GAS_PRICE_GWEI.instant}
          onClick={() => {
            setGasPrice(GAS_PRICE_GWEI.instant);
          }}
        >
          {gasTabs[2]}
        </Tab>
      </TabsWrapBlock>
    </Flex>
  );
};

export default GasSettings;
