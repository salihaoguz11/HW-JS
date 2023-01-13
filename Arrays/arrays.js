// const arr = Array();

// console.log(arr);

// const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
// const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
// const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
// const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // array of strings, products
// const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
// const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];

// console.log(fruits);
// console.log(webTechs);
// console.log(fruits.length);
// console.log(vegetables.length);

// const arr1 = [
//   "Asabeneh",
//   250,
//   true,
//   { country: "Finland", city: "Helsinki" },
//   { skills: ["HTML", "CSS", "JS", "React", "Python"] },
// ]; // arr containing different data types
// console.log(arr1);
// let js = "JavaScript";
// const chars = js.split();
// const chars1 = js.split("");
// console.log(chars);
// console.log(chars1);

// let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

// const comp = companiesString.split();
// // console.log(comp);
// // console.log(comp.length);

// // const Ada = "Adanaya adanada adanali";
// // // const adana = Ada.split("d");

// // // console.log(adana);

// // const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
// // console.log(numbers);
// // console.log(numbers.length);

// // const webTechs = [
// //   "HTML",
// //   "CSS",
// //   "JavaScript",
// //   "React",
// //   "Redux",
// //   "Node",
// //   "MongoDB",
// // ];
// // console.log(webTechs[5]);

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers[0]);
// numbers[0] = 20;
// numbers[4] = 20;
// console.log(numbers);

// const yeni = Array(4).fill(4);
// console.log(yeni);

// const firstList = [1, 2, 3];
// const secondList = ["a", "b", "c"];
// const thirdList = firstList.concat(secondList);
// console.log(thirdList);

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.indexOf(4));
// console.log(numbers.indexOf(1));
// console.log(numbers.indexOf(9));

// let result = numbers.indexOf(5);
// // if (result === -1) {
// //   console.log("this number does not exist");
// // } else {
// //   console.log("this number does  exist");
// // }

// result === -1
//   ? console.log("this number does not exist")
//   : console.log("this number does  exist");
// ("this number does  exist");

// const numbers = [1, 2, 3, 4, 5, 3, 1, 2];
// console.log(numbers.lastIndexOf(2));
// console.log(numbers.includes(9));

// console.log(numbers.toString());

// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];

// console.log(names.toString());
// console.log(names.join());

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.slice());
// console.log(numbers.slice(0));
// console.log(numbers.slice(0, numbers.length));
// // console.log(numbers.slice(1, 4));

// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(3, 3, 7, 8, 9);
// console.log(numbers);
// numbers.push(90);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// numbers.shift();
// console.log(numbers);
// numbers.unshift(3);
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

// const arr1 = [1, 4, 9, 2, 3, 7];
// const arr2 = [8, 5, 0, 6];
// const arr3 = arr1.concat(arr2);
// console.log(arr3);
// const reversed = arr3.reverse();
// console.log(reversed);
// console.log(arr3.sort());
// console.log(arr3.reverse());

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const arr = [];
const arr1 = [1, 2, 3, 4, 5, 6];

// console.log(arr1);
// console.log(arr1.length);
// console.log(arr1[0]);
// console.log(arr1[2]);
// console.log(arr1[5]);

// const mixedDataTypes = [1, 2, 3, "sall", true, false];
// console.log(mixedDataTypes);
// console.log(mixedDataTypes[mixedDataTypes.length - 2]);
// console.log(mixedDataTypes[mixedDataTypes.length - 3]);

const Companies = [
  "Facebook",
  "Google",
  " Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(Companies);
console.log(Companies.length);
console.log(Companies[0]);
console.log(Companies[5]);

console.log(Companies[3]);
console.log(Companies[6]);
console.log(Companies[4]);
console.log(Companies[Companies.length - 1]);
console.log(Companies.includes("Amazon"));
// console.log(Companies[6].toLocaleUpperCase());
console.log(Companies[3].toLocaleUpperCase());
console.log(Companies[5].toLocaleUpperCase());
console.log(Companies[3].toLocaleLowerCase());
console.log(Companies);
// let moreThanOneO = [];
// for (let i = 0; i < Companies.length; i++) {
//   moreThanOneO.push(Companies[i].includes("oo"));
// }
// console.log(moreThanOneO);
// console.log(Companies[5].toLocaleUpperCase());
// console.log(Companies[4].toLocaleUpperCase());
// console.log(Companies[3].toLocaleUpperCase());
// console.log(Companies[2].toLocaleUpperCase());
// console.log(Companies[1].toLocaleUpperCase());
// console.log(Companies[0].toLocaleUpperCase());
// console.log(Companies);
console.log(`${Companies}  are big IT companies.`);
console.log(Companies.join(",").concat(" are big companies."));
console.log(Companies.splice(6, 0, "and").concat(" are big companies."));

// console.log(Companies.pop());

// console.log(`${Companies}  "and Amazon are   big IT companies.`);
// console.log(Companies);
// Companies.push("Amazon");
// console.log(Companies);

// // let o = Companies.length;
// // if (((o = 0), o > 1, o++)) {
// //   console.log(Companies);
// // }

console.log([Companies.sort()]);

// console.log(Companies.sort());
// console.log(Companies.reverse());
// console.log(Companies.slice(0, 3));
// console.log(Companies.slice(-3));
// console.log(Companies);
// console.log(Companies.slice(3, 4));
// console.log(Companies.shift());
// console.log(Companies);
// Companies.splice(2, 1);
// console.log(Companies);
// console.log(Companies.pop());
// Companies.splice(0, 5);

// console.log(Companies);

//*"The greatest victory is that which requires no battle" -

let reverseWords = (str) => {
  return str.split(" ").reverse().join(" ");
};
console.log(
  reverseWords("The greatest victory is that which requires no battle")
);

//*We need to write some code to return the original price of a product, the return type must be of type decimal and the number must be rounded to two decimal places.

//*We will be given the sale price (discounted price), and the sale percentage, our job is to figure out the original price.

let discoverOriginalPrice = (a, b) => {
  let result = (100 * a) / (100 - b).toFixed(2);
  return result;
};

console.log(discoverOriginalPrice(80, 20));

//*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

let getSum = (a, b) => {
  sum = 0;
  if (a < b) {
    for (i = 0; i < b; i++) {
      sum += i;
    }
  } else if (a == b) {
    return b;
  } else {
    for (j = b; j <= a; j++) {
      sum += j;
    }
  }
  return sum;
};
console.log(getSum(1, 3));


//*Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

//*For example:

//** Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
//** Input [1, 2, 0] => Output [1, 1, 0]

let smaller = (nums) => {
  arr = []
  for(i = 0; i < nums.length; i++){
      x = nums[i]
      counter = 0
      for(j = i+1; j < nums.length ; j++){
          x > nums[j] && counter++
      }
      arr.push(counter)
  }
  return arr
}


//*Write a function that outputs the transpose of a matrix - a new matrix where the columns and rows of the original are swapped.

//*For example, the transpose of:
//*| 1 2 3 |
//*| 4 5 6 |

//* is 

//*| 1 4 |
//*| 2 5 |
//*| 3 6 |

let transpose = (matrix) => {
  return matrix[0].map(v,i=>console.log(`${v}${}`);)
}
console.log(transpose([[1,2,3],[4,5,6]]));