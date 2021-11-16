import React, { useCallback } from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { ErrorIcon, ArrowUpIcon, MetamaskIcon } from "../Svg";
import { Flex, Box } from "../Box";
import { Link } from "../Link";
import { Spinner } from "../Spinner";
import { Modal, InjectedModalProps } from "../../widgets/Modal";
import { RowFixed } from "../Layout/Row";
import { AutoColumn, ColumnCenter } from "../Layout/Column";

const Wrapper = styled.div`
  width: 100%;
`;
const Section = styled(AutoColumn)`
  padding: 24px;
`;

const ConfirmedIcon = styled(ColumnCenter)`
  padding: 24px 0;
`;

export interface ConfirmationPendingContentTextProps {
  confirmationWaiting: string;
  transactionConfirm: string;
}

export interface ConfirmationPendingContentProps {
  pendingText: string;
  texts: ConfirmationPendingContentTextProps;
}

function ConfirmationPendingContent({ pendingText, texts }: ConfirmationPendingContentProps) {
  const { confirmationWaiting, transactionConfirm } = texts;

  return (
    <Wrapper>
      <ConfirmedIcon>
        <Spinner />
      </ConfirmedIcon>
      <AutoColumn gap="12px" justify="center">
        <Text fontSize="20px">{confirmationWaiting}</Text>
        <AutoColumn gap="12px" justify="center">
          <Text bold small textAlign="center">
            {pendingText}
          </Text>
        </AutoColumn>
        <Text small color="textSubtle" textAlign="center">
          {transactionConfirm}
        </Text>
      </AutoColumn>
    </Wrapper>
  );
}

export interface TransactionSubmittedContentProps {
  onDismiss?: () => void
  registerToken: (address: string, symbol: string, decimals: number) => void
  txHash: string | undefined
  chainId: any
  currencyToAdd?: any
  bscScanLink: string
  transSubmittedText: string
  bscScanLinkText: string
  metamaskAssetText: string
  btnCloseText: string
  isMetaMask: boolean
  token: any
}

function TransactionSubmittedContent({
  onDismiss,
  registerToken,
  chainId,
  txHash,
  currencyToAdd,
  bscScanLink,
  transSubmittedText,
  bscScanLinkText,
  metamaskAssetText,
  btnCloseText,
  isMetaMask,
  token,
}: TransactionSubmittedContentProps) {
  return (
    <Wrapper>
      <Section>
        <ConfirmedIcon>
          <ArrowUpIcon strokeWidth={0.5} width="90px" color="primary" />
        </ConfirmedIcon>
        <AutoColumn gap="12px" justify="center">
          <Text fontSize="20px">{transSubmittedText}</Text>
          {chainId && txHash && (
            <Link external small href={bscScanLink}>
              {bscScanLinkText}
            </Link>
          )}
          {currencyToAdd && isMetaMask && (
            <Button
              variant="tertiary"
              mt="12px"
              width="fit-content"
              onClick={() => registerToken(token.address, token.symbol, token.decimals)}
            >
              <RowFixed>
                {metamaskAssetText}
                <MetamaskIcon width="16px" ml="6px" />
              </RowFixed>
            </Button>
          )}
          <Button onClick={onDismiss} mt="20px">
            {btnCloseText}
          </Button>
        </AutoColumn>
      </Section>
    </Wrapper>
  );
}

export function ConfirmationModalContent({
  bottomContent,
  topContent,
}: {
  topContent: () => React.ReactNode;
  bottomContent: () => React.ReactNode;
}) {
  return (
    <Wrapper>
      <Box>{topContent()}</Box>
      <Box>{bottomContent()}</Box>
    </Wrapper>
  );
}

export interface TransactionErrorContentProps {
  message: string;
  onDismiss?: () => void;
  dismissText: string;
}

export function TransactionErrorContent({ message, onDismiss, dismissText }: TransactionErrorContentProps) {
  return (
    <Wrapper>
      <AutoColumn justify="center">
        <ErrorIcon color="failure" width="64px" />
        <Text color="failure" style={{ textAlign: "center", width: "85%" }}>
          {message}
        </Text>
      </AutoColumn>

      <Flex justifyContent="center" pt="24px">
        <Button onClick={onDismiss}>{dismissText}</Button>
      </Flex>
    </Wrapper>
  );
}

interface ConfirmationModalProps {
  title: string
  customOnDismiss?: () => void
  txHash: string | undefined
  content: () => React.ReactNode
  attemptingTxn: boolean
  pendingText: string
  currencyToAdd?: any
  texts: ConfirmationPendingContentTextProps
  chainId: any
}

const TransactionConfirmationModal: React.FC<
  InjectedModalProps & ConfirmationModalProps & TransactionSubmittedContentProps
> = ({
  title,
  onDismiss,
  customOnDismiss,
  attemptingTxn,
  txHash,
  pendingText,
  content,
  currencyToAdd,
  texts,
  chainId,
  registerToken,
  bscScanLink,
  transSubmittedText,
  bscScanLinkText,
  metamaskAssetText,
  btnCloseText,
  isMetaMask,
  token,
}) => {
  const handleDismiss = useCallback(() => {
    if (customOnDismiss) {
      customOnDismiss();
    }
    if (onDismiss) onDismiss();
  }, [customOnDismiss, onDismiss]);

  if (!chainId) return null;

  return (
    <Modal title={title} headerBackground="gradients.cardHeader" onDismiss={handleDismiss}>
      {attemptingTxn ? (
        <ConfirmationPendingContent pendingText={pendingText} texts={texts} />
      ) : txHash ? (
        <TransactionSubmittedContent
          chainId={chainId}
          txHash={txHash}
          onDismiss={onDismiss}
          currencyToAdd={currencyToAdd}
          registerToken={registerToken}
          bscScanLink={bscScanLink}
          transSubmittedText={transSubmittedText}
          bscScanLinkText={bscScanLinkText}
          metamaskAssetText={metamaskAssetText}
          btnCloseText={btnCloseText}
          isMetaMask={isMetaMask}
          token={token}
        />
      ) : (
        content()
      )}
    </Modal>
  );
};

export default TransactionConfirmationModal;
