// minMaxSum
// write a function that given 5 numbers in an array will return the lowest
// and the highest possible values when summing 4 out of the 5 numbers.
// return these values as a string


// function(array)
// min
// max
// return
// const array = [1,2,3,4,5]
// output = [10, 14]

const minMaxSum = function(arrayNumbers) {
  let minMax = [];
  let min = 0;
  for (num of arrayNumbers) {
    if (num < min) {
      num += min;
      minMax.push(min);
    }
    if (num > min) {
      num += min;
      minMax.push(min);
    }
  }
  return minMax;
};

console.log(minMaxSum([1, 2, 3, 4, 5]))

