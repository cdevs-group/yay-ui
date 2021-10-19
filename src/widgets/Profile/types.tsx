export interface ProfileCardProps {
  token?: string;
  texts: {
    title: string;
    coins: string;
    games: string;
    wins: string;
    losses: string;
    edit: string;
  };
  account: string;
  link: string;
  coins?: string;
  games?: string;
  wins?: string;
  losses?: string;
  awards?: string[];
}
