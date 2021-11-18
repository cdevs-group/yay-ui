import React, { Dispatch, SetStateAction, useState } from "react";
import { Box, Flex } from "../../../../components/Box";
import { Button } from "../../../../components/Button";

import { Text } from "../../../../components/Text";
import QuestionHelper from "../../../../components/QuestionHelper";
import { IText } from "./types";

const GasSettings = ({
  texts,
  gasPrice,
  setGasPrice,
}: {
  texts: IText;
  gasPrice: string;
  setGasPrice: Dispatch<SetStateAction<string>>;
}) => {
  // const [gasPrice, setGasPrice] = useState<string>();

  return (
    <Flex flexDirection="column">
      <Flex mb="12px" alignItems="center">
        <Text>{texts.defaultTransaction}</Text>
        <QuestionHelper text={texts.adjustGasPrice} placement="top-start" ml="4px" />
      </Flex>
      <Flex flexWrap="wrap">
        <Button
          mt="4px"
          mr="4px"
          scale="sm"
          onClick={() => {
            setGasPrice("GAS_PRICE_GWEI.default");
          }}
          // variant={gasPrice === GAS_PRICE_GWEI.default ? 'primary' : 'tertiary'}
          variant={gasPrice === "GAS_PRICE_GWEI.default" ? "primary" : "tertiary"}
        >
          {texts.standard}
          {/*{t('Standard (%gasPrice%)', { gasPrice: GAS_PRICE.default })}*/}
        </Button>
        <Button
          mt="4px"
          mr="4px"
          scale="sm"
          onClick={() => {
            // setGasPrice(GAS_PRICE_GWEI.fast)
            setGasPrice("GAS_PRICE_GWEI.fast");
          }}
          variant={gasPrice === "GAS_PRICE_GWEI.fast" ? "primary" : "tertiary"}
          // variant={gasPrice === GAS_PRICE_GWEI.fast ? 'primary' : 'tertiary'}
        >
          {texts.fast}
          {/*{t('Fast (%gasPrice%)', { gasPrice: GAS_PRICE.fast })}*/}
        </Button>
        <Button
          mr="4px"
          mt="4px"
          scale="sm"
          onClick={() => {
            // setGasPrice(GAS_PRICE_GWEI.instant)
            setGasPrice("GAS_PRICE_GWEI.instant");
          }}
          // variant={gasPrice === GAS_PRICE_GWEI.instant ? 'primary' : 'tertiary'}
          variant={gasPrice === "GAS_PRICE_GWEI.instant" ? "primary" : "tertiary"}
        >
          {texts.instant}
          {/*{t('Instant (%gasPrice%)', { gasPrice: GAS_PRICE.instant })}*/}
        </Button>
      </Flex>
    </Flex>
  );
};

export default GasSettings;
