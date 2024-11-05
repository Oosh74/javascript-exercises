const findTheOldest = function (arr) {
  let oldestPerson = arr.reduce(
    (oldest, currentPerson) => {
      if (!currentPerson.yearOfDeath) {
        currentPerson.yearOfDeath = new Date().getFullYear();
      }

      let age = currentPerson.yearOfDeath - currentPerson.yearOfBirth;

      currentPerson.age = age;
      console.log(currentPerson, 'currentPerosn');
      if (currentPerson.age > oldest.age) {
        oldest = currentPerson;
        console.log(oldest, 'OLDEST');
      }
      return oldest;
    },
    { age: 0 }
  );

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

//array of people objects
//return oldest person
const people = [
  {
    name: 'Carly',
    yearOfBirth: 1066,
  },
  {
    name: 'Ray',
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: 'Jane',
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];
console.log(findTheOldest(people));
