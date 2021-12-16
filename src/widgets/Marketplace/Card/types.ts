export interface ICardProps {
  title: string;
  author: string;
  description: string;
  picUrl: string;
  avatarUrl: string;
  likes: number;
  price: number;
  onShare: () => void;
  onFavoritesAdd: () => void;
}
