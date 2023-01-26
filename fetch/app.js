//***First *** ***/
//*setTimeout fonksiyonun gorunmesini geciktirir

//*Senkron = Single thread model

// const first = () => {
//   setTimeout(() => {
//     console.log("first");
//   }, 3000);

//   second();
// };

// const second = () => {
//   setTimeout(() => {
//     console.log("second");
//   }, 2000);
//   third();
// };

// const third = () => {
//   console.log("third");
// };

// first();

//*Asenkron= Multi thread model  ---callback ---promise ---async/await

//*1-callback
//*Veri tabanina bir urun ekleyince, urun sorgulama islemi yapabilirm .Bir urun ekleme islemi bitmeden sorgulama yapilmasin istiyorum .Bu islemlerin sirasini yonetmek istiyorum.

const products = [
  { id: 1, name: "Samsung S8", price: 40000 },
  { id: 2, name: "Samsung S7", price: 30000 },
  { id: 3, name: "Samsung S6", price: 20000 },
];

function addProduct(prd, callback) {
  setTimeout(() => {
    products.push(prd);
    callback();
  }, 2000);
}

function getProducts() {
  setTimeout(() => {
    products.forEach((p) => {
      console.log(p.name);
    });
  }, 3000);
}

addProduct({ id: 4, name: "Iphone", price: 60000 }, getProducts);
getProducts();
console.log(products);
