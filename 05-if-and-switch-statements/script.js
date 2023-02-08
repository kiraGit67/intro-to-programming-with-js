// Task 01) Spot the errors and fix them
console.log("01) Spot the errors and fix them");

const size = 25;
let result;

if (size > 10 && size < 20) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

// Task 02) oddEven function
console.log("02) oddEven function");

function oddEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else if (num % 2 !== 0) {
    return "Odd";
  }
}

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

// Task 02) oddEven function
console.log("03) oldYoung function");

function oldYoung(age) {
  if (age < 16 && age >= 0) {
    return "children";
  } else if (age < 50 && age >= 0 && age >= 16) {
    return "young person";
  } else if (age < 0 || typeof age === "string") {
    return "invalid parameter";
  } else {
    return "elder person";
  }
}

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person

console.log(oldYoung("72"));
// result should be invalid parameter

console.log(oldYoung(16));
// result should be young person

console.log(oldYoung(0));
// result should be children

console.log(oldYoung(50));
// result should be elder person

// oldYoung function solved by switch-statement
console.log("03a) oldYoungSwitch function");

function oldYoungSwitch(age) {
  let result;
  switch (true) {
    case age < 0 || typeof age === "string":
      result = "invalid parameter";
      break;
    case age < 16 && age >= 0:
      result = "children";
      break;
    case age < 50 && age >= 16:
      result = "young person";
      break;
    default:
      result = "elder person";
  }
  return result;
}

console.log(oldYoungSwitch(27));
// result should be young person

console.log(oldYoungSwitch(6));
// result should be children

console.log(oldYoungSwitch(-1));
// result should be invalid parameter

console.log(oldYoungSwitch(86));
// result should be elder person

console.log(oldYoungSwitch("72"));
// result should be invalid parameter

console.log(oldYoungSwitch(16));
// result should be young person

console.log(oldYoungSwitch(0));
// result should be children

console.log(oldYoungSwitch(50));
// result should be elder person
