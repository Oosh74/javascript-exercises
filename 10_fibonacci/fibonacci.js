const fibonacci = function (num) {
  if (typeof num === 'string') {
    num = Number(num);
  }

  if (num < 0) {
    return 'OOPS';
  }

  if (num === 1) {
    return 1;
  }

  let currNum = 1;
  let prevNum = 0;
  let newSum = 0;

  for (let i = 1; i < num; i++) {
    newSum = prevNum + currNum;
    prevNum = currNum;
    currNum = newSum;
  }

  return newSum;
};

console.log(fibonacci(1));

// Do not edit below this line
module.exports = fibonacci;
