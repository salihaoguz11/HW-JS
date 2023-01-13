const myHeader = document.getElementById("header");
console.log(header);
myHeader.style.color = "blue";
myHeader.style.backgroundColor = "yellow";

const button = document.getElementById("btn");
button.style.backgroundColor = "black";
button.style.color = "yellow";
button.style.padding = "0.7rem";
button.style.border = "none";
button.style.borderRadius = "10px";
button.style.fontSize = "20px";

const textInput = document.getElementById("input");
textInput.style.padding = "0.7 rem";

const list = document.getElementsByTagName("li");

list[0].style.color = "magenta";

list[3].textContent = "REACT/VUE";
list[3].innerText = "REACT/VUE/Swelte";
list[3].innerHTML = "REACT/VUE/Swelte/Angular";

list[4].innerHTML += `<li><a class="link" href="https://www.clarusway.com">CW</a></li>`;

const itemList = document.getElementsByClassName("list");
console.log(itemList);

const itemListArr = Array.from(itemList);
console.log(...itemList);
itemListArr.forEach((x) => console.log(x));

const itemListSpread = [...itemList];
console.log(itemListSpread);
itemListSpread.map((x) => console.log((x.style.color = "red")));

const myLi = document.querySelector("li");
console.log(myLi);
myLi.style.color = "purple";

const addItem = document.querySelector(".add-item");
addItem.style.border = "3px solid grey";
console.log(addItem);

const addBtn = document.querySelector("#btn");
console.log(addBtn);
addBtn.style.cursor = " pointer";

const itemH2 = document.querySelector(".item-list h2");
console.log(itemH2);

const addBtnType = document.querySelector("input[type='button']");
console.log(addBtnType.value);

const lists = document.querySelectorAll("ul li");
console.log(lists);
lists.forEach((li) => console.log(li.innerText));

console.log(
  document.querySelectorAll("section.item-list ul li:nth-child(4)")[0].innerText
);
console.log(
  document.querySelector("section.item-list ul li:nth-child(4)").innerText
);
console.log(
  (document.querySelector("section.item-list ul li:nth-child(4)").innerHTML =
    "<p>Paragraph</p>")
);
