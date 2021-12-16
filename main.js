const billInput = document.querySelector("#bill");
const btn5 = document.querySelector("#btn-5");
const btn10 = document.querySelector("#btn-10");
const btn15 = document.querySelector("#btn-15");
const btn25 = document.querySelector("#btn-25");
const btn50 = document.querySelector("#btn-50");
const customTip = document.querySelector("#custom-tip");
const peopleInput = document.querySelector("#n-people");
const tipAmountPara = document.querySelector("#tip-amount");
const totalAmountPara = document.querySelector("#total-amount");

let billValue = 0;
let tipPercent = 0;
let numberOfPeople = 0;

billInput.oninput = (() => {
  billValue = Number(billInput.value);
  console.log(billValue);
});

btn5.addEventListener("click", () => {
  tipPercent = Number(btn5.value);
});

btn10.addEventListener("click", () => {
  tipPercent = Number(btn10.value);
});

btn15.addEventListener("click", () => {
  tipPercent = Number(btn15.value);
});

btn25.addEventListener("click", () => {
  tipPercent = Number(btn25.value);
});

btn50.addEventListener("click", () => {
  tipPercent = Number(btn50.value);
});

customTip.oninput = (() => {
  tipPercent = Number(customTip.value / 100);
});

peopleInput.oninput = (() => {
  numberOfPeople = Number(peopleInput.value);
});