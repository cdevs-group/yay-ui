export interface TransactionSideProps {
  transactionTitle: string;
  transactionsList: Array<{
    number: string;
    link: string;
    status: boolean;
    profit: string;
  }>;
}

export interface WalletHistoryModalProps {
  onDismiss?: () => void;
  title: string;
  textsWallet: {
    title: string;
    network: string;
    wallet: string;
    newtworkName: string;
    walletName: string;
    address: string;
    button: string;
    completeText: string;
  };
  transactionTitle: string;
  tabValue: number;
  setTabValue: (e: any) => void;
  tabsList: Array<string>;
  disconnectHandler: () => void;
  transactionsList: Array<{
    number: string;
    link: string;
    status: boolean;
    profit: string;
  }>;
}

export interface WalletSideProps {
  textsWallet: {
    title: string;
    network: string;
    wallet: string;
    newtworkName: string;
    walletName: string;
    address: string;
    button: string;
    completeText: string;
  };
  disconnectHandler: () => void;
}
