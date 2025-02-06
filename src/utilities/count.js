export const count = (array, id) => {
  return array.reduce(
    (acc, item) => acc + (item.id === id ? item.quantity : 0),
    0
  );
};
