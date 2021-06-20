const person = {
  firstname: "Bhuresh",
  lastname: "Soni",
  gender: "Male",
  city: "Bangalore",
  country: "India",
  working: { city: "mumbai" },
  talk: function () {
    console.log("I am speking something JS class");
  },
  walk: function () {
    console.log("I love walking in parks");
  },
  teach: function () {
    console.log("I can teach frontend concept very well");
  },
};
person.isStudying = false;

// console.log(person.city);
// console.log(person["firstname"]);
// console.log(person.teach());
// console.log(person.isStudying);
// console.log(person.working.city);

// console.log(Object.keys(person));
// console.log(Object.values(person));
// after freezing we cannot change the values of object
// Object.freeze(person) ;

console.log(Object.getOwnPropertyNames(person));

// for (let item in person) {
//   console.log(item, "-", person[item]);
// }

// objects are addressed by refrence
// const anotherPerson = person;
// anotherPerson.city = "Pune";
// console.log(anotherPerson.city);
// console.log(person.city);

// const person1 = new Object({ name: "bhuresh", isStudying: "true" });
// console.log(person1);

// const person2 = Object.create({ gender: "female" });
// console.log(person2.gender);
