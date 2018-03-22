var people = [
  { name: "Candice", age: 25 },
  { name: "Tammy",   age: 30 },
  { name: "Allen",   age: 49 },
  { name: "Nettie",  age: 21 },
  { name: "Stuart",  age: 17 }
];

var ages =
  people.reduce(function(sum, person){
    return sum + person.age;
  }, 0);

console.log(ages);
// 142


var numbers = [7, 3, 6, 4];

var result =
  numbers.reduce(function (sum, oneNumber) {
    return sum + oneNumber;
  }, 0);

console.log( result );
// 20
