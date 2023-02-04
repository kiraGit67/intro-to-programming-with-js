// Task 01) oddNumbers function
console.log("Task 01) oddNumbers function");

function oddNumbers(firstNumber, secondNumber) {
  let oddNumbersString = "";

  for (let index = firstNumber; index <= secondNumber; index++) {
    if (index % 2 !== 0 && index > 0) {
      if (oddNumbersString === "") {
        oddNumbersString += index;
      } else {
        oddNumbersString += "," + index;
      }
    }
  }
  return oddNumbersString;
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

// Task 02) charCount function
console.log("Task 02) charCount function");

function charCount(word, letter) {
  countOfChars = 0;

  for (let index = 0; index < word.length; index++) {
    const currentLetter = word[index];

    if (currentLetter === letter) {
      countOfChars++;
    }
  }
  return countOfChars;
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
