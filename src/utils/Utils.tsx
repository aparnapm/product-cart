export const intToPriceStr = (price: number) => {
  return "$" + price.toFixed(2).toString();
};
