let l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

console.log(l.reduce(sum, 0));
console.log(l.reduce(multiply, 1));
