// Assignment 6
// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
// Also tell the user if they are legal to vote or not

function greetUser(user) {
  const { name, age, gender } = user;
  let greeting;

  switch (gender.toLowerCase()) {
    case "male":
      greeting = `Hi Mr. ${name}`;
      break;
    case "female":
      greeting = `Hi Mrs. ${name}`;
      break;
    default:
      greeting = `Hi ${name}`;
      break;
  }

  const votingStatus =
    age >= 18 ? "You are legal to vote." : "You are not legal to vote.";

  return `${greeting}, your age is ${age}. ${votingStatus}`;
}

// Example usage:
const user = {
  name: "Mohit",
  age: 20,
  gender: "male",
};

console.log(greetUser(user)); // Hi Mr. Mohit, your age is 20. You are legal to vote.
