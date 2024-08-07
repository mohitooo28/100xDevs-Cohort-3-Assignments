// Assignment 9
// Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male

function getAdultMales(users) {
  return users.filter(
    (user) => user.age > 18 && user.gender.toLowerCase() === "male"
  );
}

const usersArray = [
  { name: "Aegon", age: 19, gender: "male" },
  { name: "Aemond", age: 17, gender: "male" },
  { name: "Helaena", age: 21, gender: "female" },
  { name: "Daemon", age: 25, gender: "male" },
  { name: "Alicent", age: 31, gender: "female" },
  { name: "Jace", age: 18, gender: "male" },
  { name: "Rhaenyra ", age: 10, gender: "female" },
  { name: "Daeron", age: 12, gender: "male" },
];

const adultMales = getAdultMales(usersArray);

console.log(adultMales);

/*
Output:
[
  { name: 'Aegon', age: 19, gender: 'male' },
  { name: 'Daemon', age: 25, gender: 'male' }
]
*/
