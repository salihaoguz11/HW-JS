// //*1- getElementById()=> Id secer

// const h1 = document.getElementById("header");

// h1.style.backgroundColor = "red";

// h1.style.color = "white";

// const myInput = document.getElementById("input");
// myInput.style.padding = "1rem";
// myInput.style.borderRadius = "20px";

// const button = document.getElementById("btn");
// button.style.padding = "1rem";
// button.style.backgroundColor = "black";
// button.style.color = "white";
// button.style.width = "7rem";
// button.style.borderRadius = "20px";
// button.style.fontSize = "1.1rem";

// //*2- getElementsByByTagName() => tag secer

// const list = document.getElementsByTagName("li");

// list[0].style.color = "red";
// list.item(1).style.color = "blue";
// // list[1].textContent = "STEVE";

// //* getElementsByClassName => class secer

// //* querySelector() => id,class,tag secer

// const myLi = document.querySelector("li"); //*ilk gordugu li yi secer

// const itemList = document.querySelector(".item-list");
// itemList.style.color = "red";

// // const input = document.querySelector("#input");

// // //*querySelectorAll() forEach() dogrudan kullanilabilir.

// // const lists = document.querySelectorAll("ul li");
// // lists.forEach((item) => console.log(item.innerText));

// //*Traversing DOM

// const list = (document.querySelector(
//   ".list"
// ).parentNode.parentNode.style.border = "2px solid red");

// const addItem = (document.querySelector(".add-item").children[0].style.color =
//   "red");

//JavaScript
// document.querySelectorAll("div").forEach((e) => {
//   e.onclick = (e) => console.log(e.currentTarget.id);
// });

// const [, , daltones] = ["Joe", "Jack", "William", "Averell"];
// console.log(daltones);

// const instructors = {
//   name: "Noah",
// };
// console.log(instructors.name);
// instructors.name;
// console.log(instructors.name);

// const numbers = [1, 2, 3, 4, 5];
// const [x, y, ...restof] = numbers;
// console.log(restof);

// document.querySelector(
//   ".list"
// ).nextElementSibling.previousElementSibling.style.border = "2px solid red";

// const newUl = document.querySelector("ul");

// const newLi = document.createElement("li");

// newLi.setAttribute("id", "Steve");
// newLi.setAttribute("class", "Mentor");

// const text = document.createTextNode("Clarusway");

// newLi.appendChild(text);

// newUl.appendChild(newLi);

//*Events

// document.querySelector(".container").addEventListener("mouseover", () => {
//   console.log("clicked");
// });

document.querySelector("body").addEventListener("mousemove", (e) => {
  document.querySelector("body").style.backgroundColor = `rgb(${e.screenX %% },${
    e.screenY 
  },${e.screenX + e.screenY })`;
});
