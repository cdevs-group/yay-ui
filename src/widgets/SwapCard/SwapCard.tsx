import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { ArrowDownIcon } from "../../components/Svg";
import { Box } from "../../components/Box";
import { useModal } from "../Modal";
import UnsupportedCurrencyFooter, { UnsupportedCurrencyFooterProps } from "../../components/UnsupportedCurrencyFooter";
import AddressInputPanel, { AddressInputPanelProps } from "./components/AddressInputPanel";
import { GreyCard } from "../../components/StyledCard";
import Column, { AutoColumn } from "../../components/Layout/Column";
import ConfirmSwapModal, { ConfirmSwapModalProps } from "./components/ConfirmSwapModal";
import { CurrencyInputPanel, CurrencyInputPanelProps } from "../../components/CurrencyInputPanel";
import { AutoRow, RowBetween } from "../../components/Layout/Row";
import AdvancedSwapDetailsDropdown from "./components/AdvancedSwapDetailsDropdown";
import { ArrowWrapper, SwapCallbackError, Wrapper } from "./components/styleds";
import TradePrice, { TradePriceProps } from "./components/TradePrice";
//import ImportTokenWarningModal from "./components/ImportTokenWarningModal"
import ProgressSteps, { ProgressCirclesProps } from "./components/ProgressSteps";
import { AppHeader, AppBody } from "./components/App";
import { AdvancedSwapDetailsProps } from "./components/AdvancedSwapDetails";
import { AppHeaderProps } from "./components/App/types";
import { TransactionsModalProps } from "./components/App/Transactions/TransactionsModal";
import { TransactionDetailsProps } from "./components/App/Transactions/types";
import { InjectedModalProps } from "../Modal";
import { TransactionSubmittedContentProps } from "../../components/TransactionConfirmationModal";

const Label = styled(Text)`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.text};
`;

const StyledSlippageToleranceText = styled(Text)`
  font-size: 13px;
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.green};
`;

interface SwapCardProps {
  currencyInputPanelFrom: CurrencyInputPanelProps;
  currencyInputPanelTo: CurrencyInputPanelProps;
  appHeader: TransactionsModalProps & TransactionDetailsProps & AppHeaderProps & { onDismiss: () => void };
  ArrowDownIconComponent: {
    onClick: () => void;
    color: string;
  };
  AddressInputPanelComponent: AddressInputPanelProps;
  AdvancedSwapDetailsDropdownComponent: AdvancedSwapDetailsProps;
  ConnectWalletButton: React.ReactNode;
  swapIsUnsupported: boolean;
  showWrap: boolean;
  noRoute: boolean;
  showApproveFlow: boolean;
  showFooter: boolean;
  trade: any;
  account?: any;
  allowedSlippage: number;
  UnsupportedCurrencyFooterComponent: UnsupportedCurrencyFooterProps;
  texts: {
    removeSendButton: string;
    priceLabel: string;
    slippageToleranceLabel: string;
    unsupportedAssetButton: string;
    wrapOrUnwrapButton: string;
    approvalButton: string;
    priceImpactSeverityButton: string;
    liquidityText: string;
    priceImpactSeverityButtonError: string;
    recipientButton: string;
  };
  TradePriceComponent: TradePriceProps;
  ProgressStepsComponent: ProgressCirclesProps;
  SwapCallbackErrorText: string;
  ConfirmSwapModalComponent: InjectedModalProps & ConfirmSwapModalProps & TransactionSubmittedContentProps;
}

export default function Swap({
  currencyInputPanelFrom,
  currencyInputPanelTo,
  appHeader,
  AddressInputPanelComponent,
  AdvancedSwapDetailsDropdownComponent,
  ArrowDownIconComponent,
  showWrap,
  noRoute,
  showApproveFlow,
  showFooter,
  trade,
  account,
  allowedSlippage,
  swapIsUnsupported,
  UnsupportedCurrencyFooterComponent,
  ConnectWalletButton,
  texts,
  TradePriceComponent,
  ProgressStepsComponent,
  SwapCallbackErrorText,
  ConfirmSwapModalComponent,
}: SwapCardProps) {
  const [onPresentConfirmModal] = useModal(
    <ConfirmSwapModal
      trade={ConfirmSwapModalComponent.trade}
      attemptingTxn={ConfirmSwapModalComponent.attemptingTxn}
      recipient={ConfirmSwapModalComponent.recipient}
      allowedSlippage={ConfirmSwapModalComponent.allowedSlippage}
      onAcceptChanges={ConfirmSwapModalComponent.onAcceptChanges}
      onConfirm={ConfirmSwapModalComponent.onConfirm}
      customOnDismiss={ConfirmSwapModalComponent.customOnDismiss}
      pendingText={ConfirmSwapModalComponent.pendingText}
      modalTitle={ConfirmSwapModalComponent.modalTitle}
      dismissText={ConfirmSwapModalComponent.dismissText}
      contentTexts={ConfirmSwapModalComponent.contentTexts}
      chainId={ConfirmSwapModalComponent.chainId}
      registerToken={ConfirmSwapModalComponent.registerToken}
      bscScanLink={ConfirmSwapModalComponent.bscScanLink}
      transSubmittedText={ConfirmSwapModalComponent.transSubmittedText}
      bscScanLinkText={ConfirmSwapModalComponent.bscScanLinkText}
      metamaskAssetText={ConfirmSwapModalComponent.metamaskAssetText}
      btnCloseText={ConfirmSwapModalComponent.btnCloseText}
      isMetaMask={ConfirmSwapModalComponent.isMetaMask}
      token={ConfirmSwapModalComponent.token}
      swapModalHeaderTexts={ConfirmSwapModalComponent.swapModalHeaderTexts}
      swapModalFooterTexts={ConfirmSwapModalComponent.swapModalFooterTexts}
      errorText={ConfirmSwapModalComponent.errorText}
      buttonSwap={ConfirmSwapModalComponent.buttonSwap}
      truncatedTextColorFrom={ConfirmSwapModalComponent.truncatedTextColorFrom}
      truncatedTextColorTo={ConfirmSwapModalComponent.truncatedTextColorTo}
      showAcceptChanges={ConfirmSwapModalComponent.showAcceptChanges}
      buttonSwapHandler={ConfirmSwapModalComponent.buttonSwapHandler}
      buttonSwapProps={ConfirmSwapModalComponent.buttonSwapProps}
      outputEstimates={ConfirmSwapModalComponent.outputEstimates}
      priceFrom={ConfirmSwapModalComponent.priceFrom}
      currencyFrom={ConfirmSwapModalComponent.currencyFrom}
      currencyTo={ConfirmSwapModalComponent.currencyTo}
      priceTo={ConfirmSwapModalComponent.priceTo}
      executionPrice={ConfirmSwapModalComponent.executionPrice}
      minimusReceived={ConfirmSwapModalComponent.minimusReceived}
      priceImpact={ConfirmSwapModalComponent.priceImpact}
    />
  );

  const {
    removeSendButton,
    priceLabel,
    slippageToleranceLabel,
    unsupportedAssetButton,
    wrapOrUnwrapButton,
    approvalButton,
    priceImpactSeverityButton,
    liquidityText,
    priceImpactSeverityButtonError,
    recipientButton,
  } = texts;

  return (
    <>
      <AppBody>
        <AppHeader
          title={appHeader.title}
          subtitle={appHeader.subtitle}
          expertMode={appHeader.expertMode}
          account={appHeader.account}
          onDismiss={appHeader.onDismiss}
          texts={appHeader.texts}
          pendingTransaction={appHeader.pendingTransaction}
          confirmedTransaction={appHeader.confirmedTransaction}
          clearAllTransactionsCallback={appHeader.clearAllTransactionsCallback}
          ConnectWalletButton={appHeader.ConnectWalletButton}
          chainId={appHeader.chainId}
          bscScanLink={appHeader.bscScanLink}
          summary={appHeader.summary}
          pending={appHeader.pending}
          success={appHeader.success}
        />
        <Wrapper id="swap-page">
          <AutoColumn gap="md">
            <CurrencyInputPanel
              label={currencyInputPanelFrom.label}
              value={currencyInputPanelFrom.value}
              onUserInput={currencyInputPanelFrom.onUserInput}
              onMax={currencyInputPanelFrom.onMax}
              showMaxButton={currencyInputPanelFrom.showMaxButton}
              currency={currencyInputPanelFrom.currency}
              //id="swap-currency-input"
              id={currencyInputPanelFrom.id}
              disableCurrencySelect={currencyInputPanelFrom.disableCurrencySelect}
              pair={currencyInputPanelFrom.pair}
              hideInput={currencyInputPanelFrom.hideInput}
              account={currencyInputPanelFrom.account}
              onPresentCurrencyModal={currencyInputPanelFrom.onPresentCurrencyModal}
              сurrencyLogo={currencyInputPanelFrom.сurrencyLogo}
              doubleCurrencyLogo={currencyInputPanelFrom.doubleCurrencyLogo}
              texts={currencyInputPanelFrom.texts}
            />
            <AutoColumn justify="space-between">
              <AutoRow justify={appHeader.expertMode ? "space-between" : "center"} style={{ padding: "0 1rem" }}>
                <ArrowWrapper clickable>
                  <ArrowDownIcon
                    width="16px"
                    onClick={ArrowDownIconComponent.onClick}
                    color={ArrowDownIconComponent.color}
                  />
                  {appHeader.expertMode ? (
                    <Button variant="text" id="add-recipient-button" onClick={() => null}>
                      {recipientButton}
                    </Button>
                  ) : null}
                </ArrowWrapper>
              </AutoRow>
            </AutoColumn>
            <CurrencyInputPanel
              label={currencyInputPanelTo.label}
              value={currencyInputPanelTo.value}
              onUserInput={currencyInputPanelTo.onUserInput}
              onMax={currencyInputPanelTo.onMax}
              showMaxButton={currencyInputPanelTo.showMaxButton}
              currency={currencyInputPanelTo.currency}
              id={currencyInputPanelTo.id}
              disableCurrencySelect={currencyInputPanelTo.disableCurrencySelect}
              pair={currencyInputPanelTo.pair}
              hideInput={currencyInputPanelTo.hideInput}
              account={currencyInputPanelTo.account}
              onPresentCurrencyModal={currencyInputPanelTo.onPresentCurrencyModal}
              сurrencyLogo={currencyInputPanelTo.сurrencyLogo}
              doubleCurrencyLogo={currencyInputPanelTo.doubleCurrencyLogo}
              texts={currencyInputPanelTo.texts}
            />
            {appHeader.expertMode ? (
              <>
                <AutoRow justify="space-between" style={{ padding: "0 1rem" }}>
                  <ArrowWrapper clickable={false}>
                    <ArrowDownIcon width="16px" />
                  </ArrowWrapper>
                  <Button variant="text" id="remove-recipient-button" onClick={() => null}>
                    {removeSendButton}
                  </Button>
                </AutoRow>
                <AddressInputPanel
                  id={AddressInputPanelComponent.id}
                  value={AddressInputPanelComponent.value}
                  onChange={AddressInputPanelComponent.onChange}
                  linkText={AddressInputPanelComponent.linkText}
                  recipientText={AddressInputPanelComponent.recipientText}
                  inputPlaceholderText={AddressInputPanelComponent.inputPlaceholderText}
                  ENS={AddressInputPanelComponent.ENS}
                  chainId={AddressInputPanelComponent.chainId}
                  bscScanLink={AddressInputPanelComponent.bscScanLink}
                />
              </>
            ) : null}
            {showWrap ? null : (
              <AutoColumn gap="8px" style={{ padding: "0 16px" }}>
                {/* {Boolean(trade) && (
                  <RowBetween align="center">
                    <Label>{priceLabel}</Label>
                    <TradePrice
                      price={TradePriceComponent.price}
                      showInverted={TradePriceComponent.showInverted}
                      setShowInverted={TradePriceComponent.setShowInverted}
                      show={TradePriceComponent.show}
                      label={TradePriceComponent.label}
                      formattedPrice={TradePriceComponent.formattedPrice}
                    />
                  </RowBetween>
                )} */}
                {allowedSlippage && (
                  <AutoRow>
                    <Label>{slippageToleranceLabel}</Label>
                    <StyledSlippageToleranceText>{allowedSlippage / 100}%</StyledSlippageToleranceText>
                  </AutoRow>
                )}
              </AutoColumn>
            )}
          </AutoColumn>
          <Box mt="1rem">
            {swapIsUnsupported ? (
              <Button width="100%" disabled mb="4px">
                {unsupportedAssetButton}
              </Button>
            ) : !account ? (
              ConnectWalletButton
            ) : showWrap ? (
              <Button width="100%" onClick={() => null}>
                {wrapOrUnwrapButton}
              </Button>
            ) : noRoute ? (
              <GreyCard style={{ textAlign: "center" }}>
                <Text color="textSubtle" mb="4px">
                  {liquidityText}
                </Text>
              </GreyCard>
            ) : showApproveFlow ? (
              <RowBetween>
                <Button variant="success" onClick={() => null} width="48%">
                  {approvalButton}
                </Button>
                <Button variant="danger" onClick={() => null} width="48%" id="swap-button">
                  {priceImpactSeverityButton}
                </Button>
              </RowBetween>
            ) : (
              <Button variant="danger" onClick={() => null} id="swap-button" width="100%">
                {priceImpactSeverityButtonError}
              </Button>
            )}
            {showApproveFlow && (
              <Column style={{ marginTop: "1rem" }}>
                <ProgressSteps steps={ProgressStepsComponent.steps} disabled={ProgressStepsComponent.disabled} />
              </Column>
            )}
            {appHeader.expertMode ? <SwapCallbackError error={SwapCallbackErrorText} /> : null}
          </Box>
        </Wrapper>
      </AppBody>
      {
        showFooter && (
          <>{!swapIsUnsupported ? (
              <AdvancedSwapDetailsDropdown
                trade={AdvancedSwapDetailsDropdownComponent.trade}
                lastTrade={AdvancedSwapDetailsDropdownComponent.lastTrade}
                routeText={AdvancedSwapDetailsDropdownComponent.routeText}
                routingFromToken={AdvancedSwapDetailsDropdownComponent.routingFromToken}
                tradeSummaryTexts={AdvancedSwapDetailsDropdownComponent.tradeSummaryTexts}
                errorText={AdvancedSwapDetailsDropdownComponent.errorText}
                showRoute={AdvancedSwapDetailsDropdownComponent.showRoute}
              />
            ) : (
              <UnsupportedCurrencyFooter
                tokens={UnsupportedCurrencyFooterComponent.tokens}
                srcs={UnsupportedCurrencyFooterComponent.srcs}
                isEther={UnsupportedCurrencyFooterComponent.isEther}
                chainId={UnsupportedCurrencyFooterComponent.chainId}
                bscScanLink={UnsupportedCurrencyFooterComponent.bscScanLink}
                unsupportedTokens={UnsupportedCurrencyFooterComponent.unsupportedTokens}
              />
            )}</>
        )
      }
    </>
  );
}
