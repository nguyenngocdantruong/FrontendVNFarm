import { SortType } from "./Enum.js";

export default function createFilterOrder({
  searchTerm = "",
  sortBy = SortType.Latest,
  page = 1,
  pageSize = 10,
  startDate = null,
  endDate = null,
  status = -999,
  paymentStatus = -999,
  paymentMethod = -999,
  minTotal = 0,
  maxTotal = 2147483647,
  storeId = null
}) {
  return {
    searchTerm,
    sortBy,
    page,
    pageSize,
    startDate,
    endDate,
    status,
    paymentStatus,
    paymentMethod,
    minTotal,
    maxTotal,
    storeId
  };
} 