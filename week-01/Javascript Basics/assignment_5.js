// Assignment 5
// Write a function that takes a user as an input and greets them with their name and age

function greetUser(user) {
  return `Hello ${user.name}, you are ${user.age} years old!`;
}

const user = {
  name: "Mohit",
  age: 20,
};

console.log(greetUser(user)); // Hello Mohit, you are 20 years old!
