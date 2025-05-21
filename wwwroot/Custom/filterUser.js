import { SortType, UserRole } from "./Enum.js";

export default function createFilterUser(
    {
        search = "",
        sort = SortType.ASC,
        role = UserRole.All,
        isActive = null,
        emailVerified = null,
        page = 1,
        pageSize = 10,
        searchTerm = ""
    }
) {
    return {
        search,
        sort,
        role,
        isActive,
        emailVerified,
        page,
        pageSize,
        searchTerm
    };
}
