const palindromes = (string) => {
  let sanitizedStr = string
    .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '')
    .replace(/\s/g, '')
    .toLowerCase();

  let newString = sanitizedStr.split('').reverse().join('');

  console.log(newString);
  if (sanitizedStr === newString) {
    return true;
  } else {
    return false;
  }
};

console.log(palindromes('racecar!'));

// Do not edit below this line
module.exports = palindromes;
