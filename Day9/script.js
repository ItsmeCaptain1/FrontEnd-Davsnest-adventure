// Global variables are property of window
// var a = 10;
// var b = 20;

// Global Function are methods of window
// function ab() {
//   console.log("hello world");
// }
// console.log(this) here this is pointing to window class
// console.log(window);

// const server = {
//   serverName: "Devsnest",
//   getInvite: function () {
//     // console.log(this);
//     console.log("discord.gg/" + this.serverName);
//   },
// };
// server.getInvite();

// var a = 10;
// function ab() {
//   var a = 20;
//   console.log(this.a);
// }
// ab();

// const server = {
//   serverName: "Devsnest",
//   getInvite: function (a, b) {
//     // console.log("discord.gg/" + this.serverName);
//     console.log(a + b);
//   },
// };

// const server2 = {
//   serverName: "Devsnest2",
// };

// server.getInvite.call(server2, 1, 2);
// server.getInvite.apply(server2, [1, 2]);

// const ab = server.getInvite.bind(server, 1, 2);
// console.log(ab);
// ab();

// var a = [1, 2, 3, 4];
// var b = a;
// b.push(5);
// console.log(a);
// console.log(b);

// var c = [...a];
// c.push(10);
// console.log(c);

// const getSum = (...a) => {
//   console.log(a);
// };
// getSum(1, 2, 3, 24, 452, 134);

// const a1 = [1, 2, 3];
// const a2 = [4, 5, 6];
// console.log([...a1, ...a2]);

// const server = {
//   serverName: "Devsnest",
//   memberCount: 4000,
// };
// console.log({ ...server, memberCount: 3000 });
