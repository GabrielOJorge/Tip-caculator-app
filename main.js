const bill = document.querySelector("#bill");
const btn5 = document.querySelector("#btn-5");
const btn10 = document.querySelector("#btn-10");
const btn15 = document.querySelector("#btn-15");
const btn25 = document.querySelector("#btn-25");
const btn50 = document.querySelector("#btn-50");
const customTip = document.querySelector("#custom-tip");
const numberOfPeople = document.querySelector("#n-people");
const tipAmountPara = document.querySelector("tip-amount");
const totalAmountPara = document.querySelector("total-amount");


let billValue = 0;
let tipPercent = 0;

bill.oninput = (() => {
  billValue = bill.value;
});