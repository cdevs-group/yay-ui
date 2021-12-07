import React, { useCallback } from "react";
import styled from "styled-components";
import { Button, IconButton } from "../../../../components/Button";
import { Text } from "../../../../components/Text";
import { ArrowUpIcon, MetamaskIcon, CloseIcon } from "../../../../components/Svg";
import { Flex, Box } from "../../../../components/Box";
import { Link } from "../../../../components/Link";
import { InjectedModalProps } from "../../../Modal";
import { RowFixed } from "../../../../components/Layouts/Row";
import { AutoColumn, ColumnCenter } from "../../../../components/Layouts/Column";
import { OneGhost } from "../../../../constants/images";
import { Loader } from "../../../..";

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

export function ConfirmationPendingContent({ pendingText, texts }: ConfirmationPendingContentProps) {
  const { confirmationWaiting, transactionConfirm } = texts;

  return (
    <Wrapper>
      <AutoColumn gap="12px" justify="center">
        <ConfirmedIcon>
          <Loader />
        </ConfirmedIcon>
        <Text fontSize="20px">{confirmationWaiting}</Text>
        <AutoColumn gap="12px" justify="center">
          <Text bold small textAlign="center">
            {pendingText}
          </Text>
        </AutoColumn>
        <Text small color="green" textAlign="center">
          {transactionConfirm}
        </Text>
      </AutoColumn>
    </Wrapper>
  );
}

export interface TransactionSubmittedContentProps {
  onDismiss?: () => void;
  registerToken: any;
  txHash?: string;
  chainId: any;
  currencyToAdd?: any;
  bscScanLink: string;
  transSubmittedText: string;
  bscScanLinkText: string;
  metamaskAssetText: string;
  btnCloseText: string;
  isMetaMask: boolean;
  token: any;
}

export function TransactionSubmittedContent({
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
          <ArrowUpIcon strokeWidth={0.5} width="90px" color="green" />
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
              variant="option-dark"
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
          <Button onClick={onDismiss} mt="20px" variant="green">
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
  onDismiss?: () => void;
  dismissText: string;
}

export function TransactionErrorContent({ onDismiss, dismissText }: TransactionErrorContentProps) {
  return (
    <Wrapper>
      <AutoColumn justify="center">
        <img src={OneGhost} alt="error" />
      </AutoColumn>
      <Flex justifyContent="center" pt="24px">
        <ButtonStyle onClick={onDismiss}>{dismissText}</ButtonStyle>
      </Flex>
    </Wrapper>
  );
}

interface ConfirmationModalProps {
  title: string;
  customOnDismiss?: () => void;
  txHash: string | undefined;
  content: () => React.ReactNode;
  attemptingTxn: boolean;
  pendingText: string;
  currencyToAdd?: any;
  texts: ConfirmationPendingContentTextProps;
  chainId: any;
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
    <div>
      <Overlay />
      <StyledModal>
        <ModalHeader>
          <ModalTitle>
            <Flex>{title}</Flex>
          </ModalTitle>
          <IconButton variant="text" onClick={onDismiss} aria-label="Close the dialog">
            <CloseIcon />
          </IconButton>
        </ModalHeader>
        <Box>
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
        </Box>
      </StyledModal>
    </div>
  );
};

export default TransactionConfirmationModal;

export const StyledModal = styled.div`
  padding: 18px 8px;
  max-width: 404px;
  max-height: 100vh;
  min-width: 303px;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgGray};
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;

  ${({ theme }) => theme.mediaQueries.xs} {
    min-width: 360px;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 404px;
    width: 100%;
    padding: 27px 24px;
  }
`;
const ModalTitle = styled.div`
  align-items: center;
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  font-size: 21px;
  line-height: 27px;
  letter-spacing: 0.5px;
`;
export const ModalHeader = styled.div`
  display: flex;
  margin-bottom: 32px;
  align-items: center;
  padding: 0;
`;
const TextStyle = styled(Text)`
  margin-bottom: 15px;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.textGray};
`;
const InputWrap = styled.div`
  margin-left: 10px;
`;
const TabsWrap = styled.div`
  & button {
    padding: 7px 3px;
    font-size: 13px;

    ${({ theme }) => theme.mediaQueries.sm} {
      padding: 7px;
      font-size: 15px;
    }
  }
`;
const Overlay = styled.div`
  pointer-events: none;
  display: block;
  background: ${({ theme }) => theme.colors.overlayBg};
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
`;

const ButtonStyle = styled(Button)`
  border: none;
  outline: none;
  background: none;
  color: ${({ theme }) => theme.colors.green};
  box-shadow: none;
`;
