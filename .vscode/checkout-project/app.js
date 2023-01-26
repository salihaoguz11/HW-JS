//Local storage//

const taxRate = 0.18;
const shippingPrice = 15;
const shippingFreePrice = 300;

window.addEventListener("load", () => {
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("shippingFreePrice", shippingFreePrice);
  // calculateCartPrice();
});

// const productsDiv = document.querySelector(".cart")

// productsDiv.addEventListener("click",(e)=>{

//   if(e.target.className ==="a-solid fa-square-minus"){
//     if(e.target.nextElementSibling.innerText>1){
//       e.target.nextElementSibling.innerText--;

//     }
//     else{

//     }
//   }

// })

// get plus button//
const plusButton = document.querySelectorAll("#btn-plus");

plusButton.forEach((btn) => btn.addEventListener("click", increaseQuantity));

const minusButton = document.querySelectorAll("#btn-minus");

minusButton.forEach((btn) => btn.addEventListener("click", decreaseQuantity));

const removeButton = document.querySelectorAll(".btn-remove");

removeButton.forEach((btn) => btn.addEventListener("click", removeItem));

function removeItem(e) {
  // const product = e.target.closest("section");
  e.target.closest("section").remove();
  // product.style.display = "none";
  calculateCartPrice();
}
// calculateCartPrice();

//increase
function increaseQuantity() {
  let quantity = event.currentTarget.previousElementSibling.innerText;
  quantity++;
  event.currentTarget.previousElementSibling.innerText = quantity;

  const disPrice =
    event.currentTarget.parentElement.previousElementSibling.querySelector(
      ".disconted-price"
    ).innerText;

  const itemDescription = event.currentTarget.closest(".item-description");

  itemDescription.querySelector(".item-subtotal").innerText = (
    disPrice * quantity
  ).toFixed(2);
  calculateCartPrice();
}

//Decreace
function decreaseQuantity() {
  let quantity = event.currentTarget.nextElementSibling.innerText;

  if (quantity > 1) {
    quantity--;
    event.currentTarget.nextElementSibling.innerText = quantity;

    const disPrice =
      event.currentTarget.parentElement.previousElementSibling.querySelector(
        ".disconted-price"
      ).innerText;

    const itemDescription = event.currentTarget.closest(".item-description");

    itemDescription.querySelector(".item-subtotal").innerText = (
      disPrice * quantity
    ).toFixed(2);
    calculateCartPrice();
  }
}

const calculateCartPrice = () => {
  const productTotal = document.querySelectorAll(".item-subtotal");

  console.log(productTotal);

  let subtotal = 0;

  productTotal.forEach((span) => {
    subtotal += parseFloat(span.innerText);
  });
  console.log(subtotal);

  const taxPrice = subtotal * localStorage.getItem("taxRate");
  console.log(taxPrice);

  const shippingPrice = parseFloat(
    subtotal > 0 && subtotal < localStorage.getItem("shippingFreePrice")
      ? localStorage.getItem("shippingPrice")
      : 0
  );

  console.log(shippingPrice);

  const totalPrice = subtotal + taxPrice + shippingPrice;
  console.log(totalPrice);

  document.querySelector(".subtotal").lastElementChild.innerText =
    subtotal.toFixed(2);

  document.querySelector(".tax").lastElementChild.innerText =
    taxPrice.toFixed(2);

  document.querySelector(".shipping span:nth-child(2)").innerText =
    shippingPrice.toFixed(2);

  document.querySelector(".total span:last-child").innerText =
    totalPrice.toFixed(2);
};
