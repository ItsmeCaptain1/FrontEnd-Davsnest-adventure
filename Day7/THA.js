// 1Q
// var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
// console.log(Object.keys(student));

// 2Q
// console.log(student);
// delete student.rollno;
// console.log(student);

// 3Q
// console.log(Object.keys(student).length);

// 4Q
// var library = [
//   { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
//   { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//   },
// ];

// for (let item of library) {
//   console.log(item.readingStatus, "--", item.author, "--", item.title);
// }

// 5Q
// const cylinder = {
//   volume: function (r, h) {
//     return 3.1415 * r * r * h;
//   },
// };
// console.log(cylinder.volume(10, 100));

// 6Q
// var library = [
//   { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
//   { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
//   {
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     libraryID: 3245,
//   },
// ];
// for (let item of library) {
//   var ordered = Object.keys(item)
//     .sort()
//     .reduce((obj, key) => {
//       obj[key] = item[key];
//       return obj;
//     }, {});
// }

// for (let item of library) {
//   console.log(item);
// }
