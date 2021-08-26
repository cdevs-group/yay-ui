export interface TransactionSideProps {
  transactionTitle?: string;
  transactionsList?:
    | Array<{
        number: string;
        link: string;
        status: boolean;
        profit: string;
        linkHref: string;
      }>
    | [];
  noRecentTransactions?: string;
}

export interface WalletHistoryModalProps {
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
  transactionsList?:
    | Array<{
        number: string;
        link: string;
        status: boolean;
        linkHref: string;
        profit: string;
      }>
    | [];
}
