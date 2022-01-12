export interface ProfileCardProps {
  token?: string;
  texts: {
    title: string;
    games: string;
    wins: string;
    losses: string;
    edit: string;
    refferal: string;
    sponsor: string;
    kyc: string;
    kycVerified: string;
    kycNotVerified: string;
    tooltip: string;
    refferalListBtn?: string;
  };
  account: string;
  linkAccount: string;
  linkRefferal: string;
  linkRefferalList?: string;
  games?: string;
  wins?: string;
  losses?: string;
  awards?: string[];
  sponsor?: string;
  verified?: boolean;
  refferal?: boolean;
}
