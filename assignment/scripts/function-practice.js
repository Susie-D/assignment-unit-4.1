console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
let name = 'Susie';
function helloName(name) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log(helloName(name));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log('Add two numbers:', addNumbers(10, 12));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
}
console.log('Result is:', multiplyThree(2, 3, 4));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log(isPositive(5));
console.log(isPositive(-1));
console.log(isPositive(50));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

function getLast(array) {
  if (!array || array.length == 0 || array == []) {
    return undefined;
  }
  let lastItem = array[array.length - 1];
  return lastItem;
}
console.log(getLast([5, 4, 10]));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

console.log('Find 4:', find(4, [1, 5, 6, 8, 4]));
console.log('Find 17:', find(17, [0, 8, 54, 978, 50]));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string[0] === letter) {
    return true;
  }
  return false;
}
console.log('Letter check:', isFirstLetter('a', 'cat'));
console.log('Letter check:', isFirstLetter('o', 'octopus'));
console.log('Letter check:', isFirstLetter('z', 'banana'));

// // 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  if (array.length > 0) {
    // TODO: loop to add items
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    // TODO: return the sum
    return sum;
  }
}

console.log('Return sum of all:', sumAll([3, 2, 1, 0, 1]));
console.log('Return undefined', getLast());

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function allPositive(array) {
  let blankArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      blankArray.push(array[i]);
    }
  }
  return blankArray;
}

console.log('All positive array:', allPositive([0, -2, 3, -4, 5]));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

//Codewars: When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".
// If your language supports it, try using a switch statement.

// I am being provided any number values from 0-9 and 
// will have to return the string value of that number. 
// I created a function that takes in any number value. 
// The function will evaluate the value and see if it's from 0-9.

function switchItUp(number) {
  switch (number) {
    case 0:
      return 'Zero';
    case 1:
      return 'One';
    case 2:
      return 'Two';
    case 3:
      return 'Three';
    case 4:
      return 'Four';
    case 5:
      return 'Five';
    case 6:
      return 'Six';
    case 7:
      return 'Seven';
    case 8:
      return 'Eight';
    case 9:
      return 'Nine';
  }
}

console.log('Return One: ', switchItUp(1));
console.log('Return Five: ', switchItUp(5));

// DO NOT MODIFY
// Used for automated testing

try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
