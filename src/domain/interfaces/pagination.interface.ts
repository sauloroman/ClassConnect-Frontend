export interface IPagination {
  currentPage: number;
  nextPage: number | null;
  prevPage: number | null;
  totalItems: number;
  totalPages: number;
  limit: number;
}