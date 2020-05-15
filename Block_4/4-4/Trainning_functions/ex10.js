function profit(priceSell,productCost) {
  
let profit = true;
if (productCost >= 0 || priceSell >= 0) {
  profit = 1000 * (priceSell - productCost) * 0.8;
}
else {
  console.log("Error, Poduct price or Selling price lower than zero");
  return false;

}
console.log(profit)
}
