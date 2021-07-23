export interface PaginationProps {
  length?: number;
  togglePage?: (e: any) => Promise<void>;
  currentPage?: number;
}
