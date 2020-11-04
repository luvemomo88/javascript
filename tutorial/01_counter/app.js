const price = document.querySelector(".price");
const count = document.querySelector(".count");
const sum = document.querySelector(".sum");
// const plus = document.querySelector(".plus");
// const minus = document.querySelector(".minus");
// const reset = document.querySelector(".reset");
const btns = document.querySelectorAll("button");

const unit_price = 12000;
let num = 1;

price.textContent = unit_price;
count.textContent = num;
sum.textContent = unit_price * num;

function printTotalprice() {
  count.textContent = num;
  sum.textContent = unit_price * num;
}

// btns.forEach(function (item) {});

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    // console.log(e.target.className)
    if (e.target.className === "plus") {
      num++;
      printTotalprice();
    } else if (e.target.className === "minus") {
      num--;
      if (num <= 1) num = 1;
      printTotalprice();
    } else {
      num = 1;
      printTotalprice();
    }
  });
});

// plus.addEventListener("click", function () {
//   num++;
// printTotalprice();
// });

// minus.addEventListener("click", function () {
//   num--;
//   if(num <= 1) {
// num = 1}
//   printTotalprice();
// });

// reset.addEventListener("click", function () {
//   num = 1;
//   printTotalprice();
// });
