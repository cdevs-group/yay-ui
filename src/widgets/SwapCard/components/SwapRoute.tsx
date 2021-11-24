import React, { Fragment, memo } from "react";
import { Flex } from "../../../components/Box";
import { Text } from "../../../components/Text";
import { ChevronRightIcon } from "../../../components/Svg";

export default memo(function SwapRoute({ trade, unwrappedToken }: { trade: any; unwrappedToken: any }) {
  return (
    <Flex flexWrap="wrap" width="100%" justifyContent="flex-end" alignItems="center">
      {trade.route.path.map((token: any, i: number, path: any) => {
        const isLastItem: boolean = i === path.length - 1;
        const currency = unwrappedToken(token);

        return (
          // eslint-disable-next-line react/no-array-index-key
          <Fragment key={i}>
            <Flex alignItems="end">
              <Text fontSize="14px" ml="0.125rem" mr="0.125rem">
                {currency.symbol}
              </Text>
            </Flex>
            {isLastItem && <ChevronRightIcon width="12px" />}
          </Fragment>
        );
      })}
    </Flex>
  );
});
