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
  arr.sort();
  let minimum = 0;
  let maximun = 0;
  for (let i = 1; i < arr.length; i++) {
    maximun += arr[i];
  }
  for (let i = 0; i < arr.length - 1; i++) {
    minimum += arr[i];
  }
  console.log(`${minimum} ${maximun}`);
};

console.log(minMaxSum([1, 2, 3, 4, 5]))

