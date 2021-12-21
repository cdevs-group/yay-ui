export interface ProfileCardProps {
    token?: string;
    texts: {
        title: string;
        coins: string;
        games: string;
        wins: string;
        losses: string;
        edit: string;
        refferal: string;
    };
    account: string;
    linkAccount: string;
    linkRefferal: string;
    coins?: string;
    games?: string;
    wins?: string;
    losses?: string;
    awards?: string[];
}
