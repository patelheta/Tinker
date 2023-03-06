// function calculate amount
// output : total cost = 8
// input: array of integer [2, 5, 1, 4]

const calculateAmount = function(prices) {
  let minAmount = prices[0];
  let totalAmount = prices[0];
  for (let i = 1; i < prices.length; i++) {
    totalAmount += Math.max(prices[i] - minAmount, 0);
    minAmount = Math.min(prices[i], minAmount);

  }
  return totalAmount;
};

console.log(calculateAmount([2, 5, 1, 4]));