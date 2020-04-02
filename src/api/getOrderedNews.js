const removeDuplicate = arr => {
  const seen = {};
  return arr.filter(item => {
    return Object.hasOwnProperty.call(seen, item.name)
      ? false
      : (seen[item.name] = true);
  });
};

const getOrderedNews = (oldNews, fetchedNews) => {
  return removeDuplicate([...oldNews, ...fetchedNews]);
};

export default getOrderedNews;
