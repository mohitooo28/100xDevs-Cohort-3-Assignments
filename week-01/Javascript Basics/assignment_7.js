// Assignment 7
// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

function getEvenNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = getEvenNumbers(numbersArray);

console.log(evenNumbers); // [ 2, 4, 6, 8, 10 ]