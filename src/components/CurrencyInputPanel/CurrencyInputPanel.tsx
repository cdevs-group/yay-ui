import React from "react";
import styled from "styled-components";
import { Flex } from "../Box";
import { Button } from "../Button";
import NumericalInput from "./NumericalInput";
import { RowBetween } from "../Layout/Row";
import { Text } from "../Text";
import { CurrencyInputPanelProps } from "./types";
import { ArrowDownIcon } from "../Svg";

const InputRow = styled.div<{ selected: boolean }>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: ${({ selected }) => (selected ? "0.75rem 0.5rem 0.75rem 1rem" : "0.75rem 0.75rem 0.75rem 1rem")};
`;
const CurrencySelectButton = styled(Button).attrs({ variant: "text", scale: "sm" })`
  padding: 0 0.5rem;
`;
const LabelRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0.75rem 1rem 0 1rem;
`;
const InputPanel = styled.div<{ hideInput?: boolean }>`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  border-radius: ${({ hideInput }) => (hideInput ? "8px" : "20px")};
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 1;
`;
const Container = styled.div<{ hideInput: boolean }>`
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.bgCard5};
  box-shadow: ${({ theme }) => theme.shadows.input};
`;

const CurrencyInputPanel: React.FC<CurrencyInputPanelProps> = ({
  value,
  onUserInput,
  onMax,
  showMaxButton,
  label,
  currency,
  disableCurrencySelect = false,
  pair = null, // used for double token logo
  hideInput = false,
  id,
  account,
  onPresentCurrencyModal,
  сurrencyLogo,
  doubleCurrencyLogo,
  texts,
}) => {
  return (
    <InputPanel id={id}>
      <Container hideInput={hideInput}>
        {!hideInput && (
          <LabelRow>
            <RowBetween>
              <Text fontSize="14px">{texts.translatedLabel}</Text>
              {account && (
                <Text onClick={onMax} fontSize="14px" style={{ display: "inline", cursor: "pointer" }}>
                  {texts.balance}
                </Text>
              )}
            </RowBetween>
          </LabelRow>
        )}
        <InputRow style={hideInput ? { padding: "0", borderRadius: "8px" } : {}} selected={disableCurrencySelect}>
          {!hideInput && (
            <>
              <NumericalInput
                className="token-amount-input"
                title={texts.numericalInputTitle}
                value={value}
                onUserInput={(val) => {
                  onUserInput(val);
                }}
              />
              {account && currency && showMaxButton && label !== "To" && (
                <Button onClick={onMax} scale="sm" variant="text">
                  {texts.max}
                </Button>
              )}
            </>
          )}
          <CurrencySelectButton
            selected={!!currency}
            className="open-currency-select-button"
            onClick={() => {
              if (!disableCurrencySelect) {
                onPresentCurrencyModal();
              }
            }}
          >
            <Flex alignItems="center" justifyContent="space-between">
              {pair ? doubleCurrencyLogo : currency ? сurrencyLogo : null}
              {pair ? (
                <Text id="pair">
                  {pair?.token0.symbol}:{pair?.token1.symbol}
                </Text>
              ) : (
                <Text id="pair">{texts.currencySelect}</Text>
              )}
              {!disableCurrencySelect && <ArrowDownIcon />}
            </Flex>
          </CurrencySelectButton>
        </InputRow>
      </Container>
    </InputPanel>
  );
};

export default CurrencyInputPanel;
