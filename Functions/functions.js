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
// //   let fib2 = 1;
// //   let sum = 0;

// //   for (let i = 2; i < navigator; i++) {
// //     sum = fib1 + fib2;
// //     fib1 = fib2;
// //     fib2 = sum;
// //   }
// //   return fib2;
// // };

// // const n = +prompt("Please enter n:");
// // if (n <= 0) {
// //   console.log("n should be bigger then zero");
// // } else {
// //   console.log(`FIBONACCI(${n}) = ${fibo(n)}`);
// // }

// //?RECURSION - recursive functions

// // const fibo = (n) => {
// //   if (n <= 0) {
// //     return 0;
// //   } else if (n === 1 || n === 2) {
// //     return 1;
// //   } else {
// //     return fibo(n - 1) + fibo(n - 2);
// //   }
// // };

// // const n = +prompt("Please enter n:");
// // if (n <= 0) {
// //   console.log("n should be bigger then zero");
// // } else {
// //   console.log(`FIBONACCI(${n}) = ${fibo(n)}`);
// // }

// //?SCOPS

// // {
// //     {
// //        const a = 5; // ayni scop icinde bir degiskene farkli deger atanamaz.Mesela buraya const a = 8 diyemeyiz artik.
// //     }

// //     {

// //       const a = 8;
// //     }
// // }

// // const steve = () => {

// // // }

// // function sumAllNums() {
// //  console.log(arguments)
// // }

// // const changeToUpperCase = (arr) => {
// //   const newArr = [];
// //   for (const element of arr) {
// //     newArr.push(element.toUpperCase());
// //   }
// //   return newArr;
// // };

// // // const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
// // // console.log(changeToUpperCase(countries));

// // // //*Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

// // // areaOfCircle = (r) => {
// // //   const pi = 3.14;
// // //   let area = +pi * r * r;
// // //   return areaOfCircle;
// // // };
// // // console.log(areaOfCircle(2));

// // //*Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

// // convertCelsiusToFahrenheit = (C) => {
// //   let F = (C * 9) / 5 + 32;
// //   return F;
// // };
// // console.log(convertCelsiusToFahrenheit(100));

// //*Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// //*The same groups apply to both men and women.
// // Underweight: BMI is less than 18.5
// // Normal weight: BMI is 18.5 to 24.9
// // Overweight: BMI is 25 to 29.9
// // Obese: BMI is 30 or more

// BodyMassIndexCalculator = (weight,heigth)=>{
//     let bmi = weight/(heigth*heigth)
//     if (bmi < 18.5){
//         return 'underweigth'
//     }else if  (bmi >= 18.5 && bmi <24.9)
// {
//     return 'normal weigth'
// }else if  (bmi >= 18.5 && bmi <24.9){
//     return 'normal weigth'
// }
// }

// console.log(reverseArray([1, 2, 3, 4, 5]));
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(["A", "B", "C"]));
//['C', 'B', 'A']
// let a = [1, 2, 3, 4, 5];
// reverseArr = (arr) => {
//   let newArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) newArr.push(arr[i]);
//   return newArr;
// };
// console.log(reverseArr(a));

//*Exercises 1
//*Declare a function fullName and it print out your full name.

function printFullName() {
  let firstName = "Saliha";
  let lastName = "Oguz";
  let space = " ";
  let fullName = firstName + space + lastName;
  console.log(fullName);
}
printFullName();

//*2- Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName() {
  let firstName = "Saliha";
  let lastName = "Oguz";
  let space = " ";
  let fName = firstName + space + lastName;
  return fName;
}
console.log(fullName());

//*3-Declare a function addNumbers and it takes two two parameters and it returns sum.

function sum() {
  let numOne = 2;
  let numTwo = 4;
  let total = numOne + numTwo;
  return total;
}
console.log(sum());

//*4-An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

recArea = (length, width) => {
  let area = length * width;
  return area;
};
console.log(recArea(15, 7));

//*5-A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

perimeterOfRectangle = (length, width) => {
  let area = 2 * (length + width);
  return area;
};
console.log(perimeterOfRectangle(5, 4));

//*6-A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

volumeOfRectPrism = (length, width, heigth) => {
  let volume = length * width * heigth;
  return volume;
};
console.log(volumeOfRectPrism(5, 8, 4));

//*7-Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

areaOfCircle = (r) => {
  area = 3.14 * r;
  return area;
};
console.log(areaOfCircle(3));

//*8-Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

circumOfCircle = (r) => {
  let circumference = 2 * 3.14 * r;
  return circumference;
};
console.log(circumOfCircle(4));

//*9-Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

yogunluk = (kütle, hacim) => {
  return kütle / hacim;
};
function yogunluk1(kütle, hacim) {
  return kütle / hacim;
}
console.log(yogunluk1(10, 2));

//*10-Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

movObjSpeed = (distance, time) => {
  let speed = distance / time;
  return speed;
};
console.log(movObjSpeed(150, 2));

//*11-Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

subWeigth = (mass, gravity) => {
  return (weight = mass * gravity);
};

console.log(subWeigth(3, 9));

//*12-Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

convertCelsiusToFahrenheit = (C) => {
  let F = (C * 9) / 5 + 32;
  return F;
};
console.log(convertCelsiusToFahrenheit(100));
convertFahToCelc = (F) => {
  let C = ((F - 32) * 5) / 9;
  return C;
};
console.log(convertFahToCelc(212));

//*13-Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

BodyMassIndexCalc = (weight, height) => {
  let bmi = weight / (height * height);
  if (bmi < 18.5) {
    return `underweight`;
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return `normal`;
  } else if (bmi >= 25 && bmi < 29.9) {
    return `overweight`;
  } else {
    return `obese`;
  }
};
console.log(BodyMassIndexCalc(170, 1.89));

//*14-Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

const season = (month) => {
  if (3 <= month && month <= 5) {
    return "spring";
  }
  if (6 <= month && month <= 8) {
    return "summer";
  }
  if (9 <= month && month <= 11) {
    return "autumn";
  } else {
    return "winter ";
  }
};

console.log(season(3));
//* Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']
let a = [1, 2, 3, 4, 5];
let b = [9, 8, 7, 6, 5];
reverseArr = (arr) => {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) newArr.push(arr[i]);
  return newArr;
};
console.log(reverseArr(a));
console.log(reverseArr(b));
