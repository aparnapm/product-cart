export const intToPriceStr = (price: number) => {
  return "$" + price.toFixed(2).toString();
};
export const validNumber = (val: string) =>{
  return !isNaN(parseInt(val));
}