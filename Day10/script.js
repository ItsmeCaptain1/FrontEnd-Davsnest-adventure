// function sum1(a, b) {
//   // console.log(a+b) ;
//   return a + b;
// }

// const sum2 = function sumOfTwoNumber(a, b) {
//   return a + b;
// };

// const sum3 = () => console.log("I am arrow function");
// const sum4 = (a, b) => console.log("I am arrow function", a + b);

// const sum5 = (a) => console.log("I am also arrow function", a);

// console.log(sum1(1, 3));
// console.log(sum2(9, 2));

// console.log(sum3());
// console.log(sum4(9, 2));
// console.log(sum5(1));

// -------------------------- Call Back -----------------------
// function outer(a, callback) {
//   var b = callback();
//   return a + b;
// }
function inner() {
  const b = 10;
  console.log(b);
}
// console.log(outer(59, inner));

// ----------------------- setTimeout -----------------
// setTimeout(() => {
//   inner();
// }, 3000);
// setTimeout(inner,3000) ;
