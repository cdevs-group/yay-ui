import React from "react";
import { Flex } from "../../../../components/Box";
import { TextStyle, TabsWrapBlock, Tab } from "./styles";
import { baseColors } from "../../../../theme/colors";

const GasSettings = ({
  activeTabGas,
  title,
  gasTabs,
  setGasPrice,
}: {
  activeTabGas: number;
  title?: string;
  setGasPrice: (cur: number) => void;
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
          className={activeTabGas === 0 ? "active" : ""}
          onClick={() => {
            setGasPrice(0);
          }}
        >
          {gasTabs[0]}
        </Tab>
        <Tab
          colorActive={baseColors.green}
          paddingTabs="7px"
          className={activeTabGas === 1 ? "active" : ""}
          onClick={() => {
            setGasPrice(1);
          }}
        >
          {gasTabs[1]}
        </Tab>
        <Tab
          colorActive={baseColors.green}
          paddingTabs="7px"
          className={activeTabGas === 2 ? "active" : ""}
          onClick={() => {
            setGasPrice(2);
          }}
        >
          {gasTabs[2]}
        </Tab>
      </TabsWrapBlock>
    </Flex>
  );
};

export default GasSettings;
