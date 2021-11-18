import React from "react"
import styled from "styled-components"
import { Text } from "../Text"
import { Flex } from "../Box"
import { Heading } from "../Heading"
import { IconButton } from "../Button"
import { ArrowBackIcon } from "../Svg"
import { NotificationDot } from "../NotificationDot"
import { Link } from "react-router-dom"
import GlobalSettings from "../SwapMenu/GlobalSettings"
import Transactions from "./Transactions"
import { TransactionsModalProps } from "./Transactions/TransactionsModal"
import QuestionHelper from "../QuestionHelper"

export interface AppHeaderProps {
  title: string
  subtitle: string
  helper?: string
  backTo?: string
  noConfig?: boolean
  expertMode: boolean
}

const AppHeaderContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.card};
`

const AppHeader: React.FC<AppHeaderProps & TransactionsModalProps & { onDismiss: () => void }> = ({ 
  title,
  subtitle,
  helper,
  backTo,
  noConfig = false,
  expertMode,
  account,
  onDismiss,
  texts,
  pendingTransaction,
  confirmedTransaction,
  clearAllTransactionsCallback,
  ConnectWalletButton
 }) => {
  return (
    <AppHeaderContainer>
      <Flex alignItems="center" mr={noConfig ? 0 : "16px"}>
        {backTo && (
          <IconButton as={Link} to={backTo}>
            <ArrowBackIcon width="32px" />
          </IconButton>
        )}
        <Flex flexDirection="column">
          <Heading as="h2" mb="8px">
            {title}
          </Heading>
          <Flex alignItems="center">
            {helper && <QuestionHelper text={helper} mr="4px" placement="top-start" />}
            <Text color="textSubtle" fontSize="14px">
              {subtitle}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      {!noConfig && (
        <Flex alignItems="center">
          <NotificationDot show={expertMode}>
          <GlobalSettings />
          </NotificationDot>
          <Transactions
             account={account}
             onDismiss={onDismiss}
             texts={texts}
             pendingTransaction={pendingTransaction}
             confirmedTransaction={confirmedTransaction}
             clearAllTransactionsCallback={clearAllTransactionsCallback}
             ConnectWalletButton={ConnectWalletButton}
          />
        </Flex>
      )}
    </AppHeaderContainer>
  )
}

export default AppHeader
