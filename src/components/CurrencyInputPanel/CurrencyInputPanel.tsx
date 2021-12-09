import React from "react";
import styled from "styled-components";
import { Flex } from "../Box";
import { Button } from "../Button";
import NumericalInput from "./NumericalInput";
import { RowBetween } from "../Layouts/Row";
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
  &:disabled {
    opacity: 1;
  }
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
  hideBalance = false,
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
              <Text color="textGray">{texts.translatedLabel}</Text>
              {account && (
                <Text
                  onClick={onMax}
                  color="textGray"
                  fontSize="10px"
                  fontWeight="400"
                  style={{ display: "inline", cursor: "pointer" }}
                >
                  {!hideBalance && !!currency ? texts.balance : " -"}
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
            disabled={disableCurrencySelect}
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
                <Text id="pair" ml="10px" mr="5px" fontSize="11px">
                  {pair?.token0.symbol}:{pair?.token1.symbol}
                </Text>
              ) : (
                <Text id="pair" ml="10px" mr="5px" fontSize="11px">
                  {texts.currencySelect}
                </Text>
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
