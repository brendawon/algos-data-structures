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

/*
var maxProfit = function(prices) {
  //create a max profit starting at zero
  let max = 0;
  //find the smallest price and see if the profit between it and the current price is > max profit; otherwise, find the next smallest price to check the remaining differences; if those differences are > max value, max profit is updated
  let minPrice = Infinity;
  
  //loop through once
  for (let i = 0; i < prices.length; i++){
      //reassign min price if the current price is smaller
      minPrice = Math.min(minPrice, prices[i]);
      
      //if the difference between the current price and minPrice is > the max profit, reassign max profit, otherwise we keep the old max profit
      max = Math.max(max, prices[i] - minPrice);
  }
  //return max profit
  return max;
};
*/
