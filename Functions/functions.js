//?Functions

// function calculate(name, yob) {
//   const age = new Date().getFullYear() - yob;
//   console.log(`${name}'s age is ${age}`);
// }
// calculate("Steve", "1992");

//* Console'dan girilen bir sayinin tek veya cift olddgunu
//? hesaplayan ve sonucu ana programa donduren kodu fonksiyonlar
//? ile yaziniz.

// console.log(oddOrEven(76));

// function oddOrEven(num) {
//   return num % 2 === 0 ? "Even" : "Odd";
// }

//?Expression yontemi

// const printHello = function () {
//   console.log("Hello");
//   console.log("Helloooo");
// };

// printHello(); //invoke, call
// printHello();

// let oddOrEven = function (num) {
//   return num % 2 === 0 ? "Even" : "Odd";
// };
// confirm(oddOrEven(5));

//* 3 sayinin en buyugunu bulunuz?

// const findBiggest = function (n1, n2, n3 = -Number.MAX_VALUE) {
//   let biggest = n1;
//   if (n2 >= biggest) {
//     biggest = n2;
//   }
//   if (n3 >= biggest) {
//     biggest = n3;
//   }
//   return biggest;
// };
// console.log(`The biggest:${findBiggest(2, 1, 4)}`);

//*Practise2

// let result = 0;
// const compute = function (n1, n2, op) {
//   switch (op) {
//     case "+":
//       result = n1 + n2;

//       break;
//     case "-":
//       result = n1 - n2;
//       break;
//     case "*":
//       result = n1 * n2;
//       break;
//     case "/":
//       result = n1 / n2;
//       break;
//   }
//   return result;
// };

// console.log(compute(4, 3, "*"));

//*Practise3

//hacim = pi * r * 2 * h  =  pi * r **  2 * h

// const r = Number(prompt("Lutfen r:"));
// const h = Number(prompt("Lutfen h:"));
// const volume = Math.PI * r ** 2 * h;
// console.log(`${r}, ${h} = Volume: ${volume.toFixed(4)}`);

//?ARROW FUNCTION

// const r = Number(prompt("Lutfen r:"));
// const h = Number(prompt("Lutfen h:"));

// const volume = (r, h = 1) => Math.PI * r ** 2 * h;

// console.log(`${r}, ${h} = Volume: ${volume(r, h).toFixed(4)}`);

//* Practise1

// const r = Number(prompt("Lutfen r:"));
// const h = Number(prompt("Lutfen h:"));

// const volumeLong = (r, h) => {
//   const result = Math.PI * r ** 2 * h;
//   console.log(result);
//   return result;
// };
// console.log(`${r}, ${h} = Volume: ${volumeLong(r, h).toFixed(4)}`);

//*Practise2 ?????

// const calculateage = (year) => new Date().getFullYear - year;
// console.log("AGE:", calculateage(1990));

//*Practise 3 ??????

//*Girilen n terime kadar Fibonacci sayilarinin toplamini hesaplayarak yazdiran fonksiyonu dongu ile kodlayiniz.

// const fibo = (n) => {
//   let fib1 = 1;
//   let fib2 = 1;
//   let sum = 0;

//   for (let i = 2; i < navigator; i++) {
//     sum = fib1 + fib2;
//     fib1 = fib2;
//     fib2 = sum;
//   }
//   return fib2;
// };

// const n = +prompt("Please enter n:");
// if (n <= 0) {
//   console.log("n should be bigger then zero");
// } else {
//   console.log(`FIBONACCI(${n}) = ${fibo(n)}`);
// }

//?RECURSION - recursive functions

// const fibo = (n) => {
//   if (n <= 0) {
//     return 0;
//   } else if (n === 1 || n === 2) {
//     return 1;
//   } else {
//     return fibo(n - 1) + fibo(n - 2);
//   }
// };

// const n = +prompt("Please enter n:");
// if (n <= 0) {
//   console.log("n should be bigger then zero");
// } else {
//   console.log(`FIBONACCI(${n}) = ${fibo(n)}`);
// }

//?SCOPS

// {
//     {
//        const a = 5; // ayni scop icinde bir degiskene farkli deger atanamaz.Mesela buraya const a = 8 diyemeyiz artik.
//     }

//     {

//       const a = 8;
//     }
// }

// const steve = () => {

// }
