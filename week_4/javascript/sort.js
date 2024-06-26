let l = [6, 7, 3, 2, 1, 2, 6, 7, 4, 2, 10];

console.log(l);

// for (let i = 0; i < l.length; i++) {
//   let lowestValue = l[i];
//   let indexOfLowestValue = i;
//   for (let j = i; j < l.length; j++) {
//     if (l[j] < lowestValue) {
//       lowestValue = l[j];
//       indexOfLowestValue = j;
//     }
//   }
//   let temp = l[i];
//   l[i] = l[indexOfLowestValue];
//   l[indexOfLowestValue] = temp;
// }

console.log(l.sort((a, b) => ascending(a, b)));

function ascending(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.log(l.sort((a, b) => descending(a, b)));

function descending(a, b) {
  if (b < a) {
    return -1;
  } else if (b > a) {
    return 1;
  }
  return 0;
}

let fruits = ["apple", "banana"];
console.log(fruits.sort());
console.log(fruits.sort().reverse());
