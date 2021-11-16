import React, { useState } from "react";
import styled from "styled-components";
import { StyledBalanceMaxMini, SwapCallbackError } from "./styleds";
import { AutoColumn } from "../../../components/Layout/Column";
import { RowBetween, RowFixed, AutoRow } from "../../../components/Layout/Row";
import QuestionHelper from "../../../components/QuestionHelper";
import { Text } from "../../../components/Text";
import { AutoRenewIcon } from "../../..";
import { SwapModalFooterProps } from "../types";

const SwapModalFooterContainer = styled(AutoColumn)`
  margin-top: 24px;
  padding: 16px;
  border-radius: ${({ theme }) => theme.radii.default};
  border: 1px solid ${({ theme }) => theme.colors.greyText};
  background-color: ${({ theme }) => theme.colors.panel};
`;

const SwapModalFooter: React.FC<SwapModalFooterProps> = ({ swapErrorMessage, errorText, buttonSwap, texts }) => {
  const [showInverted, setShowInverted] = useState<boolean>(false);

  return (
    <>
      <SwapModalFooterContainer>
        <RowBetween align="center">
          <Text fontSize="14px">{texts.price}</Text>
          <Text
            fontSize="14px"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              textAlign: "right",
              paddingLeft: "10px",
            }}
          >
            {texts.executionPrice}
            <StyledBalanceMaxMini onClick={() => setShowInverted(!showInverted)}>
              <AutoRenewIcon width="14px" />
            </StyledBalanceMaxMini>
          </Text>
        </RowBetween>

        <RowBetween>
          <RowFixed>
            <Text fontSize="14px">{texts.receivedOrSold}</Text>
            <QuestionHelper text={texts.transactionRevert} ml="4px" />
          </RowFixed>
          <RowFixed>
            <Text fontSize="14px">{texts.slippageAdjustedAmounts}</Text>
            <Text fontSize="14px" marginLeft="4px">
              {texts.currencySymbolTop}
            </Text>
          </RowFixed>
        </RowBetween>
        <RowBetween>
          <RowFixed>
            <Text fontSize="14px">{texts.priceImpact}</Text>
            <QuestionHelper text={texts.differencePrice} ml="4px" />
          </RowFixed>
          {errorText}
        </RowBetween>
        <RowBetween>
          <RowFixed>
            <Text fontSize="14px">{texts.liquidityProviderFee}</Text>
            <QuestionHelper
              text={
                <>
                  <Text mb="12px">{texts.amountFee}</Text>
                  <Text>- {texts.amountLP}</Text>
                  <Text>- {texts.amountTreasury}</Text>
                  <Text>- {texts.amountTowards}</Text>
                </>
              }
              ml="4px"
            />
          </RowFixed>
          <Text fontSize="14px">{texts.currencySymbolBottom}</Text>
        </RowBetween>
      </SwapModalFooterContainer>
      <AutoRow>
        {buttonSwap}
        {swapErrorMessage ? <SwapCallbackError error={swapErrorMessage} /> : null}
      </AutoRow>
    </>
  );
};

export default SwapModalFooter;