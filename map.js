var array = [11, 75, 4];

var doubleArray =
  array.map(function (oneNumber) {
    return oneNumber * 2;
  });

console.log(doubleArray);
// [22, 150, 8]


var cities = ["miami", "barcelona", "madrid", "paris"];

var capsCities = cities.map(function (blah) {
  var firstLetter = blah[0].toUpperCase();
  var restOfWord = blah.slice(1);

  return firstLetter + restOfWord;
});

console.log(capsCities);
// ["Miami", "Barcelona", "Madrid"]
