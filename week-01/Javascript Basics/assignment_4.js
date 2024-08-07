// Assignment 4
// Write a function called sum that finds the sum from 1 to a number
function totalSum(num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}

console.log(totalSum(15)); //120
console.log(totalSum(5)); // 15
console.log(totalSum(100)); // 5050