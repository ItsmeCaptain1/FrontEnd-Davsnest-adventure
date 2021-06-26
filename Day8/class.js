// const obj1 = { name: "Captain1" };
// obj2 = Object.create(obj1);

// obj2.name = "Captain2";
// console.log(obj2.name);

// --------- splice -----------

// var fruits = ["A", "B", "C", "D"];
// fruits.splice(2, 0, "X");
// console.log(fruits);
// fruits.splice(2, 0, "X", "Y");
// console.log(fruits);
// fruits.splice(2, 1, "X");
// console.log(fruits);
// fruits.splice(2, 2, "X");
// console.log(fruits);

// // Getter ans Setter
// var car = {
//   name: "lambo",
//   get getCarPrice() {
//     console.log("price is 2 crores");
//   },
//   set setCarName(carname) {
//     this.name = carname;
//   },
//   drive: function (item) {
//     console.log("I will drive my ", this.name, item);
//   },
// };

// console.log(car.getCarPrice);
// car.setCarName = "Mercedes-Benz";

// delete car.name;
// console.log(car);

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 45, "green");
// console.log(myFather);

// const obj1 = { name: "Captain1" };

// const obj2 = {} ;
// Object.assign(obj2,obj1) ;

// obj2 = { ...obj1 };
// console.log(obj2);

function sumOfAllNumber(a, b, ...c) {
  // console.log(c);
  // console.log(arguments);
}

// console.log(sumOfAllNumber(1, 2, 3, 4, 5, 6));

function sum(a, b, ...c) {
  const resultingSum = c.reduce((acc, item) => {
    acc = acc + item;
    return acc;
  }, 0);
  return a + b + resultingSum;
}

console.log(sum(1, 2, 3, 4, 5));
