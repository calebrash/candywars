function commatize(n) {
  return n.toString()
    .split('')
    .reverse()
    .map((a, index) => index > 0 && index % 3 === 0 ? a + ',' : a)
    .reverse()
    .join('');
};

export {
  commatize,
}
