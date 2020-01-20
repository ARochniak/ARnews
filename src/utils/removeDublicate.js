const removeDublicate = arr => {
  const seen = {};
  return arr.filter(item => {
    return Object.hasOwnProperty.call(seen, item.name)
      ? false
      : (seen[item.name] = true);
  });
};

export default removeDublicate;
