export const parsePrice = (priceStr) => {
  // Remove currency symbol "₹" and commas ","
  return parseFloat(priceStr.replace(/[₹,]/g, ""));
};

export const filterProductsByPrice = (products, min, max) => {
  return products.filter((product) => {
    const price = parsePrice(product.price);
    const minPrice = min !== undefined ? min : 0;
    const maxPrice = max !== undefined ? max : Infinity;
    return price >= minPrice && price <= maxPrice;
  });
};

export const PRICE_RANGES = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under ₹500", min: 0, max: 500 },
  { label: "₹500 - ₹1,500", min: 500, max: 1500 },
  { label: "₹1,500 - ₹3,000", min: 1500, max: 3000 },
  { label: "Above ₹3,000", min: 3000, max: Infinity },
];
