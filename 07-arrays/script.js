// Defining Arrays
const animals = ["Dog", "Cat", "Lion"];
const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];

// 01) removeItem function
console.log("Task 01) removeItem function");

function removeItem(aray, position) {
  return aray.slice(position);
}

console.log(removeItem(animals, 1));
// result should be: ["Cat", "Lion"]
console.log(animals);
// result should be still: ["Dog", "Cat", "Lion"]

console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]
console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

// 02) sumOfCharacters function
console.log("Task 02) sumOfCharacters function");

//Defining Arrays
const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];

function sumOfCharacters(arr) {
  let countOfCharacters = 0;

  for (let index = 0; index < arr.length; index++) {
    const word = arr[index];

    if (typeof word === "string") {
      countOfCharacters += word.length;
    }
  }

  return countOfCharacters;
}

console.log(sumOfCharacters(arr1));
// result should be: 17

console.log(sumOfCharacters(arr2));
// result should be: 55
