// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
// Example
// input = [3,2,1,3]
// output = 2



function birthdayCakeCandles(candles) {
  let maxValue = candles[0];
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > maxValue) {
      count = 0;
      maxValue = candles[i];
      count++;
    }
    else if (candles[i] === maxValue) {
      count++;
    }
  }
  return count;

}