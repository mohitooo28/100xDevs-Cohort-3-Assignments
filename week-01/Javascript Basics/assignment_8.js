// Assignment 8
// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

function getAdultUsers(users) {
  return users.filter((user) => user.age >= 18);
}

const usersArray = [
  { name: "Aegon", age: 19 },
  { name: "Aemond", age: 17 },
  { name: "Helaena", age: 21 },
  { name: "Daemon", age: 25 },
  { name: "Alicent", age: 31 },
  { name: "Jace", age: 18 },
  { name: "Rhaenyra ", age: 10 },
  { name: "Daeron", age: 12 },
];

const adultUsers = getAdultUsers(usersArray);

console.log(adultUsers);

/*
Output:
[
  { name: 'Aegon', age: 19 },
  { name: 'Helaena', age: 21 },
  { name: 'Daemon', age: 25 },
  { name: 'Alicent', age: 31 },
  { name: 'Jace', age: 18 }
]
*/