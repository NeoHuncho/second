const parsePrice = (price: number | string | undefined) => {
  if (price === undefined) {
    return "0,00 €";
  }
  if (typeof price === "string") {
    price = parseFloat(price);
  }
  return Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: "EUR",
  }).format(price);
};
export default parsePrice;
