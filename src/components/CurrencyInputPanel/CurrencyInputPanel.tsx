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
  padding: 9px 6px 6px;
  width: 100%;
  max-width: 66px;
  background: ${({ theme }) => theme.colors.bgOpacitY3};
  border-radius: 12px;
  height: auto;
  cursor: default;
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
  background: ${({ theme }) => theme.colors.bgOpacity};
  z-index: 1;
`;
const Container = styled(Flex)<{ hideInput: boolean }>`
  justify-content: space-between;
  padding: 14px 14px 14px 25px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.bgCard5};
  box-shadow: ${({ theme }) => theme.shadows.input};
`;

const FlexCurrency = styled(Flex)``;

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
        <div style={{ flexGrow: 1, flexDirection: "column", display: "flex", justifyContent: "space-between" }}>
          {!hideInput && (
            <RowBetween>
              <Text color="textGray">{texts.translatedLabel}</Text>
            </RowBetween>
          )}
          <InputRow
            style={hideInput ? { padding: "0", borderRadius: "8px" } : { padding: "4px 4px 4px 0" }}
            selected={disableCurrencySelect}
          >
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
          </InputRow>
        </div>
        {!hideInput && (
          <CurrencySelectButton
            selected={!!currency}
            className="open-currency-select-button"
            onClick={() => {
              if (!disableCurrencySelect) {
                onPresentCurrencyModal();
              }
            }}
          >
            <FlexCurrency alignItems="center" justifyContent="center" flexDirection="column">
              {pair ? doubleCurrencyLogo : currency ? сurrencyLogo : null}
              {pair ? (
                <Text id="pair" mt="7px" fontSize="11px">
                  {pair?.token0.symbol}:{pair?.token1.symbol}
                </Text>
              ) : (
                <Text id="pair" mt="7px" fontSize="11px">
                  {texts.currencySelect}
                </Text>
              )}
              {!disableCurrencySelect && <ArrowDownIcon />}
            </FlexCurrency>
          </CurrencySelectButton>
        )}
      </Container>
    </InputPanel>
  );
};

export default CurrencyInputPanel;
