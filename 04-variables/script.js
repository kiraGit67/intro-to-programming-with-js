// task 01 - Spot the errors and fix them
console.log("Task 01: Spot the errors and fix them");

let userName = "Brad";
userName = "Jenna";

function getUserNameLength(name) {
  let result = name.length;
  return result;
}

console.log(getUserNameLength(userName) > 4);

// task 02 - isString function
console.log("task 02 - isString function");

const isString = function (input) {
  if (typeof input === "string") {
    return true;
  } else {
    return false;
  }
};

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true
