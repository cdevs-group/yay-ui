export interface TransactionSideProps {
  transactionTitle?: string;
  transactionsList?: Array<{
    number: string;
    link: string;
    status: boolean;
    profit: string;
  }>;
  noRecentTransactions?: string;
}

export interface WalletHistoryModalProps {
  onDismiss?: () => void;
  title?: string;
  textsWallet?: {
    title: string;
    network: string;
    wallet: string;
    newtworkName: string;
    walletName: string;
    address: string;
    button: string;
    completeText: string;
    noRecentTransactions?: string;
  };
  transactionTitle?: string;
  tabsList?: Array<string>;
  disconnectHandler?: () => void;
  transactionsList?: Array<{
    number: string;
    link: string;
    status: boolean;
    profit: string;
  }>;
}

export interface WalletSideProps {
  textsWallet?: {
    title: string;
    network: string;
    wallet: string;
    newtworkName: string;
    walletName: string;
    address: string;
    button: string;
    completeText: string;
  };
  disconnectHandler?: () => void;
}
