const removeFromArray = function (arr, ...args) {
  return arr.filter((value) => {
    if (args.includes(value) === false) {
      return true;
    } else {
      return false;
    }
  });
};

// Do not edit below this line
module.exports = removeFromArray;
