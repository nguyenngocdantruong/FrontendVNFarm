import { SortType } from "./Enum.js";

export default function createFilterProduct({
  searchTerm = "",
  sortBy = SortType.Latest,
  page = 1,
  pageSize = 10,
  minPrice = 0,
  maxPrice = 2147483647,
  categoryId = -999,
  origin = "",
  isActive = null,
  isInStock = null,
  unit = -999,
  storeId = null
}) {
  return {
    searchTerm,
    sortBy,
    page,
    pageSize,
    minPrice,
    maxPrice,
    categoryId,
    origin,
    isActive,
    isInStock,
    unit,
    storeId
  };
}
