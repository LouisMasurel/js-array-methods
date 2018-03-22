var numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers);


var words = ["Hello", "Goodbye", "First", "A", "a", "Second", "Third"];

words.sort(function (a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
});

console.log(words);
