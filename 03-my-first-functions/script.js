// Task 01 - Greet Function
console.log("Task 01 - Greet Function");

function welcomeMsg(name) {
  return "Welcome " + name;
}

console.log(welcomeMsg("Jane"));
console.log(welcomeMsg("Marc"));

// Task 02 - Gross Price Function
console.log("Task 02 - Gross Price Function");

function calcGrossPrice(netPrice, taxRate) {
  return netPrice + netPrice * taxRate;
}

console.log(calcGrossPrice(20, 0.19));
console.log(calcGrossPrice(40, 0.16));

// Task 03 - Add Positive Function
console.log("Task 03 - Add Positive Function");

function addPositive(a, b) {
  return Math.abs(a) + Math.abs(b);
}

console.log(addPositive(2, 3));
// result1 should be 5

console.log(addPositive(3, -5));
// result2 should be 8

console.log(addPositive(-1, -8));
// result2 should be 9
