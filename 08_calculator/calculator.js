const add = function (numOne, numTwo) {
  return numOne + numTwo;
};

const subtract = function (numOne, numTwo) {
  return numOne - numTwo;
};

const sum = function (arr) {
  return arr.reduce((sum, num) => {
    sum += num;
    return sum;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((sum, num) => {
    sum *= num;
    return sum;
  }, 1);
};

const power = function (numOne, numTwo) {
  let total = numOne;
  for (let i = 0; i < numTwo - 1; i++) {
    total *= numOne;
  }
  return total;
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  }

  let total = num;
  for (let i = 1; i < num; i++) {
    total *= i;
  }

  return total;
};

console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
