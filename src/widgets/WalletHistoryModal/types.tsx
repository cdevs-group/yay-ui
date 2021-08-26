export interface TransactionSideProps {
  transactionTitle?: string;
  handleClickTransactions?: () => void;
  transactionsList?:
    | Array<{
        number: string;
        link: string;
        status: boolean;
        profit: string;
      }>
    | [];
  noRecentTransactions?: string;
}

export interface WalletHistoryModalProps {
  handleClickTransactions?: () => void;
  logout?: () => void;
  account?: string;
  onDismiss?: () => void;
  textsBridge?: {
    title: string;
    network: string;
    wallet: string;
    newtworkName: string;
    walletName: string;
    button: string;
    completeText: string;
    noRecentTransactions?: string;
    tabsList?: Array<string>;
    transactionTitle?: string;
    titleModal?: string;
  };
  transactionTitle?: string;
  disconnectHandler?: () => void;
  transactionsList?:
    | Array<{
        number: string;
        link: string;
        status: boolean;
        profit: string;
      }>
    | [];
}
