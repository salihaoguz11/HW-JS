// // // for (let i = 0; i <= 5; i++) {
// // //   console.log(i);
// // // }

// // for (let i = 0; i <= 5; i++) {
// //   console.log(`${i * i}`);
// // }

// // for (let i = 0; i < 5; i++) {
// //   console.log(`${i}*${i} = ${i * i}`);
// // }
// // const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];

// // const upperCaseArr = [];
// // for (let i = 0; i < countries.length; i++) {
// //   upperCaseArr.push(countries[i]).toLocaleLowerCase;
// // }
// // console.log(upperCaseArr);
// // // const newArr = [];
// // // for (let i = 0; i < countries.length; i++) {
// // //   newArr.push(countries[i].toLocaleUpperCase());
// // // }
// // // console.log(newArr);
// // // const newArr = [];
// // // for (let i = 0; i < countries.length; i++) {
// // //   newArr.push(countries[i].toUpperCase());
// // // }

// // const Contries = ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"];
// // const newCont = [];
// // for (let i = 0; i < Contries.length; i++) {
// //   newCont.push(Contries[i].toLocaleLowerCase());
// // }
// // console.log(newCont);

// // const numbers1 = [1, 2, 3, 4, 5];
// // const newArr1 = [];
// // let sum = 0;
// // // for (let i = 0; i < numbers1.length; i++) {
// // //   newArr.push(numbers1[i] ** 2);
// // // }
// // // console.log(newArr);
// // // const numbers = [1, 2, 3, 4, 5];
// // // let sum = 0;
// // // for (let i = 0; i < numbers.length; i++) {
// // //   sum = sum + numbers[i];
// // // }

// // // console.log(sum);

// // const numbers = [1, 2, 3, 4, 5];

// // // const newArr1 = [];
// // // for (let i = 0; i < numbers.length; i++) {
// // //   newArr1.push(numbers[i] * 2);
// // // }
// // // console.log(newArr1);

// // for (let i = 0; i < numbers.length; i++) {
// //   console.log(numbers[i] * 2);
// // }

// // const countries1 = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
// // const newCont1 = [];
// // for (let i = 0; i < countries.length; i++) {
// //   newCont1.push(countries1[i].toLocaleUpperCase());
// // }
// // console.log(newCont1);

// const numbers = [1, 2, 3, 4, 5];
// for (const num of numbers) {
//   console.log(num);
// }

// for (const a of numbers) {
//   console.log(a * a);
// }

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];

// for (const tech of webTechs) {
//   console.log(tech.toLocaleUpperCase());
// }

// for (const tech of webTechs) {
//   console.log(tech[2]);
// // }

// // let sum = "";
// // for (let i = 0; i <= 7; i++) {
// //   sum = sum + "#";
// //   console.log(sum);
// // }

// //*Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} ${i * i} ${i * i * i}`);
// }

// //*Use for loop to iterate from 0 to 100 and print only even numbers

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// //*Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
// let even = 0;
// let odd = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     even = even + i;
//   } else {
//     odd = odd + i;
//   }
// }
// console.log(even, odd);

countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

let newArr = [];

// for (let i = 0; i < countries.length; i++) {
//   newArr.push(countries[i].length);
// }
// console.log(newArr);
// // console.log(countries[0].length);
for (let i = 0; i < countries.length; i++) {
  newArr.push(
    countries[i].toLowerCase(),
    countries[i].substring(0, 3),
    countries[i].length
  );
}
console.log(newArr);
