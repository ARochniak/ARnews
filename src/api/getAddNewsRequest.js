const getAddNewsRequest = (getState, count) => {
  return getState().q
    ? { q: getState().q, count }
    : { category: getState().activeCategory, count };
};

export default getAddNewsRequest;
