const sumAll = function (num1, num2) {
  let firstNum = 0;
  let secondNum = 0;
  let result = 0;

  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return 'ERROR';
  } else if (num1 <= 0 || num2 <= 0) {
    return 'ERROR';
  }

  if (num1 < num2) {
    firstNum = num1;
    secondNum = num2;
  } else {
    firstNum = num2;
    secondNum = num1;
  }

  for (let i = firstNum; i <= secondNum; i++) {
    result += i;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
