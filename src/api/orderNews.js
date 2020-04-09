const removeDuplicate = (arr, filteredField) => {
  const seen = {};
  return arr.filter(item => {
    const filterBy = item[filteredField] || item;
    return Object.hasOwnProperty.call(seen, filterBy)
      ? false
      : (seen[filterBy] = true);
  });
};

const orderNews = (oldNews, fetchedNews, filterBy = 'name') => {
  return removeDuplicate([...oldNews, ...fetchedNews], filterBy);
};

export default orderNews;
