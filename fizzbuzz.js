// FizzBuzz
// Write a function that takes in an argument (num) and counts from 1 to num. 
// Print `Fizz` if divisible by 3
// Print `Buzz` if divisible by 5
// Print `FizzBuzz` if divisible by both 5 and 3 
// Print the number if none of the above conditions are met

//function
// for loop
// if 
// else 

const fizzBuzz = function(num) {
  for (let el of num) {
    if (el % 5 === 0 && el % 3 === 0) {
      console.log('FizzBuzz');
    }
    else if (el % 3 === 0) {
      console.log('Fizz');
    }
    else if (el % 5 === 0) {
      console.log('Buzz');
    }
    else {
      console.log(el);
    }
  }
};