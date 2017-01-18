function commatize(n) {
  return n.toString()
    .split('')
    .reverse()
    .map((a, index) => {
      if (index > 0 && index % 3 === 0) {
        return `${a},`;
      }
      return a;
    })
    .reverse()
    .join('');
}

export {
  commatize,
};
export default commatize;

