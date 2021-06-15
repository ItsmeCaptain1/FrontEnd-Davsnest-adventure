// console.log(Array.isArray("w3resource"));
// console.log(Array.isArray([1, 2, 4, 0]));

a1 = [1, 2, 4, 0];
b1 = [1, 2, [4, 0]];

a2 = [...a1];
b2 = [...b1];
// console.log(a2);
// console.log(b2);

// b3 = b1.slice(0);
// console.log(b3);

// function first(arr) {
//   return arr[0];
// }

// console.log(first([7, 9, 0, -2]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2], 6));
// console.log(first([7, 9, 0, -2], -3));

// myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.join(","));
// console.log(myColor.join("+"));

var arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
var mostFreq = 1;
var m = 0;
var item;

for (var i = 0; i < arr.length; i++) {
  for (var j = i; j < arr.length; j++) {
    if (arr[i] == arr[j]) m++;
    if (mostFreq < m) {
      mostFreq = m;
      item = arr[i];
    }
  }

  m = 0;
}

console.log(item + " ( " + mostFreq + " times ) ");
