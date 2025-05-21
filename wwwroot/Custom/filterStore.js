import { SortType } from "./Enum.js";

export default function createFilterStore({
  searchTerm = "",
  sortBy = SortType.Latest,
  page = 1,
  pageSize = 10,
  type = 0,
  status = 0,
  minRating = 1,
  maxRating = 5,
}) {
  return {
    searchTerm,
    sortBy,
    page,
    pageSize,
    type,
    status,
    minRating,
    maxRating,
  };
}
