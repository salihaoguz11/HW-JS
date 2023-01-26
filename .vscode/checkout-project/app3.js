const taxRate = 0.18;
const shippingPrice = 15;
const shippingFreePrice = 300;

window.addEventListener("load", () => {
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("shippingFreePrice", shippingFreePrice);

  //   sessionStorage.setItem("taxRate", taxRate);
  //   sessionStorage.setItem("shippingPrice", shippingPrice);
  //   sessionStorage.setItem("shippingFreePrice", shippingFreePrice);
});
const productsDiv = document.querySelector(".products");

productsDiv.addEventListener("click", (event) => {
  if (event.target.className == "fa-solid fa-minus") {
    if (event.target.parentElement.querySelector(".quantity").innerText > 1) {
      event.target.parentElement.querySelector(".quantity").innerText--;
    } else {
      if (
        confirm(
          `$(event.target.parentElement.parentElement.querySelector("h2").innerText)will be deleted!!!`
        )
      ) {
        event.target.closest(".product").remove();
      }
    }
  } else if (event.target.className == "fa-solid fa-plus") {
    event.target.parentElement.querySelector(".quantity").innerText++;
  } else if (event.target.className == "product-removal") {
    event.target.closest(".product").remove();
  }
  calculateProductPrice(event.target);
  calculateCartPrice();
});

const calculateProductPrice = (btn) => {
  const productInfoDiv = btn.parentElement.parentElement;
  const price = Number(
    productInfoDiv.querySelector(".product-price strong").innerText
  );
  const quantity = Number(productInfoDiv.querySelector(".quantity").innerText);
  const productTotalDiv = productInfoDiv.querySelector(".price");
  productTotalDiv.innerText = (price * quantity).toFixed(2);
  console.log(productTotalDiv);
};

const calculateCartPrice = () => {
  const productsTotalPricesDivs = document.querySelectorAll(".price");
  const subtotal = [...productsTotalPricesDivs].reduce(
    (acc, price) => acc + Number(price.innerText),
    0
  );
  const taxPrice = subtotal * localStorage.getItem("taxRate");
  const totalShippingPrice = parseFloat(
    subtotal > 0 && subtotal < localStorage.getItem("shippingFreePrice")
      ? localStorage.getItem("shippingPrice")
      : 0
  );
  const totalCart = subtotal + taxPrice + totalShippingPrice;

  document.querySelector("#subtotalCart").innerText = subtotal.toFixed(2);
  document.querySelector("#taxRateCart").innerText = taxPrice.toFixed(2);
  document.querySelector("#shippingCart").innerText =
    totalShippingPrice.toFixed(2);
  document.querySelector("#totalCart").innerText = totalCart.toFixed(2);
};
