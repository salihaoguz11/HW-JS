const sayilar = [1, 50, 2, 41, 41, 84, 8, 35, 3];

const isimler = ["sezer", "ali", "hasan", "ayse"];

const ogrenciler = [
  { id: 12, isim: "sezer", yas: 30 },
  { id: 22, isim: "hasan", yas: 15 },
  { id: 32, isim: "fatma", yas: 55 },
  { id: 13, isim: "nuriye", yas: 19 },
  { id: 92, isim: "kemal", yas: 45 },
  { id: 15, isim: "mustafa", yas: 75 },
  { id: 44, isim: "ceren", yas: 30 },
];

//*shift method- ilk elemani siler

sayilar.shift();
// console.log(sayilar); //[50, 2, 41, 41, 84, 8, 35, 3]

//*unshift method-ilk elemana ekleme yapar

sayilar.unshift(100);
// console.log(sayilar); //[100, 50, 2, 41, 41, 84, 8, 35, 3]

//*pop sondan ilk elemani siler

sayilar.pop();
// console.log(sayilar); //100, 50, 2, 41, 41, 84, 8, 35]

//*push method - sona eleman ekler

sayilar.push(200);
// console.log(sayilar); // [100, 50, 2, 41, 41, 84, 8, 35, 200]

//*slice method - kaynak diziyi bozmaz.

// const a = sayilar.slice(1, 5);
// console.log(a); //[50, 2, 41, 41]
// console.log(sayilar); //[100, 50, 2, 41, 41, 84, 8, 35, 200]

//*splice method - kaynak dizi bozulur. ana array bozulur.

// const a = sayilar.splice(2, 4);
// console.log(a);//[2, 41, 41, 84]
// console.log(sayilar);// [100, 50, 8, 35, 200]

// 2.indexe gidip eleman silmeden 2.indexe 2 eleman ekler]\
// const a = sayilar.splice(2, 0, 11111, 2222);
// console.log(a); //[]
// console.log(sayilar); // [100, 50, 11111, 2222, 2, 41, 41, 84, 8, 35, 200]

// 2.indexi silip yeni eleman ekledik .Kaynak dizi bozulur.
// const a = sayilar.splice(2, 1, 11111, 2222);
// console.log(sayilar);//[100, 50, 11111, 2222, 41, 41, 84, 8, 35, 200]

//* Find method -

// const a = ogrenciler.find((kisi) => kisi.id === 92);
// console.log(a);

// const a = ogrenciler.find((kisi) => kisi.yas === 30);
// console.log(a);

// const a = isimler.includes("Sezer");//false - key sensitive
// const a = isimler.includes("sezer"); //true - key sensitive- lower keys

// console.log(a);

// const a = sayilar.forEach(function (sayi) {
//   console.log(sayi * 2);
// });

// const a = ogrenciler.filter((item) => item.id % 2 == 0);
// console.log(a);

//* concat method - birlestirme yapar
// const a = sayilar.concat(isimler);
// console.log(a);

//* map method- array dondurur.

// const a = sayilar.map((x) => x + 10);
// console.log(a);

//* array.from
// const a = Array.from("Sezer");
// console.log(a); //['S', 'e', 'z', 'e', 'r']

//* sort method - kusukten buyuge siralar
const a = sayilar.sort((a, b) => a - b);
console.log(a);
