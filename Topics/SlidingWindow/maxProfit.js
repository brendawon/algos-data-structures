var maxProfit = function (prices) {
  //store max profit
  let max = 0;

  //two pointers: buy index and sell index (starting one after buy index)
  let buyIndex = 0;
  let sellIndex = 1;

  //loop until sell index hits the last price in the array
  while (sellIndex < prices.length) {
    //find profit for each potential sale
    let profit = prices[sellIndex] - prices[buyIndex];
    //find if sale + the current max profit is greater than the current max profit (if it is not, that means the sale resulted in a loss so we keep the previous max)
    max = Math.max(profit + max, max);
    //increment both indices to compare all the prices
    buyIndex++;
    sellIndex++;
  }
  return max;
};
