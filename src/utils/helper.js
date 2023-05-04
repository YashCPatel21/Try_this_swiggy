export function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) => restaurant?.data?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
    return filterData;
  }
