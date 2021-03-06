import React from "react";
import styled from "styled-components";
import { AutoColumn } from "../../../components/Layouts/Column";
import { RowBetween, AutoRow, RowFixed } from "../../../components/Layouts/Row";
import { Text } from "../../../components/Text";
import { SwapModalFooterProps } from "../types";
import { Button } from "../../../index";

const SwapModalFooterContainer = styled(AutoColumn)`
  margin-top: 35px;
  padding: 16px 20px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.bgOpacitY3};
`;

const SwapModalFooter: React.FC<SwapModalFooterProps> = ({
  buttonSwapProps,
  swapErrorMessage,
  texts,
  priceImpact,
  executionPrice,
}) => {
  return (
    <>
      <SwapModalFooterContainer>
        <RowBetween mt="8px" align="center">
          <Text fontSize="11px">{texts.price}</Text>
          <Text
            fontSize="11px"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              textAlign: "right",
              paddingLeft: "10px",
            }}
          >
            {executionPrice}
          </Text>
        </RowBetween>

        <RowBetween mt="8px">
          <RowFixed>
            <Text fontSize="11px">{texts.receivedOrSold}</Text>
          </RowFixed>
          <RowFixed>
            <Text fontSize="11px">{texts.slippageAdjustedAmounts}</Text>
            <Text fontSize="11px" marginLeft="4px">
              {texts.outputAmount}
            </Text>
          </RowFixed>
        </RowBetween>
        <RowBetween mt="8px">
          <Text fontSize="11px">{texts.priceImpact}</Text>

          <Text color="green" fontSize="11px">
            {" "}
            {priceImpact}
          </Text>
        </RowBetween>
        <RowBetween mt="8px">
          <Text fontSize="11px">{texts.liquidityProviderFee}</Text>
          <Text fontSize="11px">{texts.currencySymbolBottom}</Text>
        </RowBetween>
      </SwapModalFooterContainer>
      <AutoRow>
        <Button mt="37px" variant="green" width="100%" {...buttonSwapProps}>
          {texts.buttonSwap}
        </Button>
        {swapErrorMessage ? (
          <Text fontSize="11px" color="redBg">
            {swapErrorMessage}
          </Text>
        ) : null}
      </AutoRow>
    </>
  );
};

export default SwapModalFooter;
