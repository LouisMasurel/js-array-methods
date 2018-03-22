var people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Stuart", age: 17 },
  { name: "Allen", age: 49 },
  { name: "Nettie", age: 21 },
  { name: "Bill", age: 19 }
];

var drinkers =
  people.filter(function (onePerson) {
    return onePerson.age >= 21;
  });

console.log(drinkers);
console.log("");
console.log(people);


var numbers = [1, 60, 112, 123, 100, 99, 73]

var filteredArr =
  numbers.filter(function (oneNumber) {
    return oneNumber % 2 === 1 && oneNumber > 42;
  });

console.log(filteredArr);
// [123, 99, 73]
