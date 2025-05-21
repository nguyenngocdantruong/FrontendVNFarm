export default function createFilterCategory({
    minPrice = 0,
    maxPrice = 2147483647,
    searchTerm = '',
    sortBy = 2,
    page = 1,
    pageSize = 10,
    }) {
    return {
        minPrice,
        maxPrice,
        searchTerm,
        sortBy,
        page,
        pageSize,
    };
}