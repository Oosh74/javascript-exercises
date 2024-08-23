const reverseString = function (string) {
  let strArr = string.split('');
  let reverseStrArr = [];

  for (let i = strArr.length - 1; i >= 0; i--) {
    reverseStrArr.push(strArr[i]);
  }

  return reverseStrArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
