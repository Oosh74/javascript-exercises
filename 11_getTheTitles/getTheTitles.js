const getTheTitles = function (array) {
  let titleArr = [];

  array.map((arr) => {
    titleArr.push(arr.title);
  });

  return titleArr;
};

// Do not edit below this line
module.exports = getTheTitles;
