//*Girilen sayinin faktoriyel degerini hesaplayan bir code create ediniz

// let factorial = (num) => {
//   if (num < 0) {
//     console.log(`The number should be bigger or equal than zero `);
//   } else if (num === 0) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// };
// let num = +prompt("Enter a number");
// console.log(`${num}! = ${factorial(num)}`);

//! ODEV1:  Console'dan girilen sayilarin ortalamasini bulan programi yaziniz. Program ilk olarak kullanicidan kac tane sayi gireceginin almali bu bilgi isiginda girilen sayilarin ortalmasini hesaplayarak yazdirmalidir.
// const n = Number(prompt("How many number will be inputted"));
// let avarage = 0;
// for (let i = 1; i <= n; i++) {
//   const number = Number(prompt("Please enter ${i}. number:"));
//   avarage += number;
// }

// console.log(`Avarage: ${avarage / n}`);

//! ODEV2: Console'dan girilen taban ve pozitif us degerlerine gore
//! uslu sayi sonucunu hesaplayan kodu for veya while dongusu ile yaziniz.

// const num = Number(prompt("Please enter a number;"));
// const pow = Number(prompt("Please enter  a positive power:"));
// let result = 1;
// for (let i = 0; i < pow; i++) {
//   result *= num;
// }
// console.log(`${num}^${pow} = ${result}`);

//! ODEV3 (ZOR): Console'dan girilen bir sayinin basamak sayisini hesaplayarak console'a bastiran kodu donguler yardimi ile yaziniz.

// let number = Number(prompt("Please enter a number"));
// let count = 0;

// while (number != 0) {
//   number = Math.trunc(number / 10);
//   count++;
// }
// console.log(`Digit count is ${count}`);

// //? *****************************
// //? SORU 1

// const ucgenAlan = function (taban, yukseklik) {
//   return (taban * yukseklik) / 2;
// };

// console.log(`Üçgenin alanı:${ucgenAlan(5, 9)}`);

// //? SORU 2

// const kareAl = function (n) {
//   return n * n;
// };
// const num = Number(prompt("Bir sayi giriniz?"));
// console.log(`${num} sayisinin karesi: ${kareAl(num)}`);

//************************** */

// const kupAl = function (n) {
//   return n * n * n;
// };
// const num = Number(prompt("Bir sayi giriniz?"));
// console.log(`${num} sayisinin kupu:${kupAl(num)}`);

//************************** */

// const usAl = function (t, u) {
//   return (t **= u);
// };
// const taban = +prompt("Bir taban sayi giriniz");
// const us = +prompt("Bir us sayi giriniz");
// console.log(`${taban} uzeri ${us} = ${usAl(taban, us)}`);

const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
};

//! ASSIGMENT
//? person2'nin adini ve maasini yazdiriniz.

// console.log(people.person2.name);
// console.log(people.person2.salary);

//? people objesindeki tum salary 'leri yazdirin (Dongu kullanilmali)

// let counter = 0;
// for (i = 0; i < Object.keys(people).length; i++) {
//   per = Object.keys(people);
//   sal = people[per[i]].salary;
//   console.log(sal);
// }

for (a in people) {
  console.log(people[a].salary);
}
for (const person in people) {
  console.log(`${person}: ${people[person].salary}`);
}

//? job'i developer olanlarin dob degerlerini yazdiriniz.

for (i in people) {
  if (people[i].job === "developer") {
    console.log(people[i].dob);
  }
}
