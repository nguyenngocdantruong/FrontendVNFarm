import { SortType } from "./Enum.js";

export default function createBusinessRegistrationFilter({
    searchTerm = "",
    sortBy = SortType.Latest,
    page = 0,
    pageSize = 0,
    businessType = 0,
    registrationStatus = 0
  }) {
    return {
        searchTerm,
        sortBy,
        page,
        pageSize,
        businessType,
        registrationStatus
    }
}
