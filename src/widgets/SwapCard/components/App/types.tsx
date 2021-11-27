export interface AppHeaderProps {
  title: string;
  subtitle: string;
  helper?: string;
  backTo?: string;
  noConfig?: boolean;
  expertMode: boolean;
  globalSettings: React.ReactElement | React.ReactElement[];
  transactions: React.ReactNode;
}
