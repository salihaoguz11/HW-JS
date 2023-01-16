// const person = {
//   firstName: "Asabeneh",
//   age: 250,
//   country: "Finland",
// //   city: "Helsinki",
// //   skills: ["HTML", "CSS", "JS"],
// //   title: "teacher",
// //   address: {
// //     street: "Heitamienkatu 16",
// //     pobox: 2002,
// //     city: "Helsinki",
// //   },
// //   getPersonInfo: function () {
// //     return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`;
// //   },
// // };

// // //Object methods: Object.assign, Object.keys, Object.values, Object.entries
// // //hasOwnProperty

// // const copyPerson = Object.assign([], person);
// // console.log(copyPerson);
// // console.log(Object.keys(copyPerson.address));
// // console.log(Object.values(copyPerson.address));
// // console.log(Object.entries(copyPerson));
// // console.log(copyPerson.hasOwnProperty("score"));
// // console.log(copyPerson.hasOwnProperty("firstName"));

// // //*Exercise

// // // Create an empty object called dog
// // // Print the the dog object on the console
// // // Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// // // Get name, legs, color, age and bark value from the dog object
// // // Set new properties the dog object: breed, getDogInfo

// // const dog = {};
// // console.log(dog);
// // dog.name = "karabas";
// // dog.legs = 4;
// // dog.color = "black";
// // dog["age"] = 3;
// // dog.bark = "woof woof";
// // console.log(dog);
// // dog.dogInfo = function () {
// //   dog.breed = "kangal";
// //   return `name:${this.name} age:${this.age} breed:${this.breed}`;
// // };
// // console.log(dog.dogInfo());

// //*Exercises: Level 2

// //*Find the person who has many skills in the users object.

// //*Get all the values of users object

// //*Use the countries object to print a country name, capital, populations and languages.

// const users = {
//   Alex: {
//     email: "alex@alex.com",
//     skills: ["HTML", "CSS", "JavaScript"],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: "asab@asab.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Redux",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   Brook: {
//     email: "daniel@daniel.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: "daniel@alex.com",
//     skills: ["HTML", "CSS", "JavaScript", "Python"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: "john@john.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Thomas: {
//     email: "thomas@thomas.com",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   Paul: {
//     email: "paul@paul.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };

// //*Count logged in users, count users having greater than equal to 50 points from the following object.
// let counter = 0;
// console.log();
// for (i = 0; i < Object.keys(users).length; i++) {
//   person = Object.keys(users);
//   login = users[person[i]].isLoggedIn;
//   point = users[person[i]].points;
//   login === true && point >= 50 ? counter++ : counter;
// }
// console.log(counter);

// //*Find people who are MERN stack developer from the users object
// let counter1 = [];
// console.log();
// for (i = 0; i < Object.keys(users).length; i++) {
//   person = Object.keys(users);

//   mern = users[person[i]].skills;
//   if (mern.includes("MongoDB" && "Express" && "React" && "Node")) {
//     console.log(person[i]);
//     counter1.push(person[i]);
//   }
// }
// console.log(counter1);

// //*Set your name in the users object without modifying the original users object

// let copyUsers = Object.assign({}, users);
// (copyUsers.levent = {
//   email: "john@john.com",
//   skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//   age: 20,
//   isLoggedIn: true,
//   points: 50,
// }),
//   console.log(copyUsers);

// //*Get all keys or properties of users object

// // let x = Object.entries(users);
// // let y = Object.values(users);
// // console.log(x);
// // console.log(y);

// // //* a callback function, the name of the function could be any name
// // const callback = (n) => {
// //   return n ** 2;
// // };

// // // function that takes other function as a callback
// // function cube(callback, n) {
// //   return callback(n) * n;
// // }
// // console.log(cube(callback, 3));

// // //* Higher order function returning an other function

// const higherOrder = (n) => {
//   const doSomething = (m) => {
//     const doWhatEver = (t) => {
//       return 2 * n + 3 * m + t;
//     };
//     console.log(n, m);
//     return doWhatEver;
//   };
//   console.log(doSomething);
//   return doSomething;
// };
// console.log(higherOrder(2)(3)(10));

// const higherOrder = (n) => {
//   let x = (m) => {
//     return m * n;
//   };
//   return x;
// };
// console.log(higherOrder(4)(3));

let fullStack = {
  languages: ["JavaScript", "React", "HTML"],
  jira: true,
  gitHub: true,
  difficulty: 8,
};

// fullStack["languages"].forEach((lang) => {
//   console.log(lang);
// });

for (let i = 0; i < fullStack.languages.length; i++) {
  console.log(fullStack.languages[i]);
}

// let fullStack = {
//   languages: ["JavaScript", "React", "HTML"],
//   jira: true,
//   gitHub: true,
//   difficulty: 8,
// };

// console.log(Object.keys(fullStack));

const myCar = {
  make: "ford",
  model: "Mustang",
  year: 1965,
  color: "Black",
};
/* Write your code here
 myCar.age =
*/
calculateMyCarAge = function () {
  let carYear = new Date().getFullYear() - myCar.year;
  return carYear;
};

console.log(calculateMyCarAge());
//  myCar.age(); //Output: 57
