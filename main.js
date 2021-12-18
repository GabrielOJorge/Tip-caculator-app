const billInput = document.querySelector("#bill");
const percentBtns = document.querySelectorAll(".-percent-btn")
const btn5 = document.querySelector("#btn-5");
const btn10 = document.querySelector("#btn-10");
const btn15 = document.querySelector("#btn-15");
const btn25 = document.querySelector("#btn-25");
const btn50 = document.querySelector("#btn-50");
const customTip = document.querySelector("#custom-tip");
const resetBtn = document.querySelector("#reset-btn")
const peopleInput = document.querySelector("#n-people");
const tipAmountPara = document.querySelector("#tip-amount");
const totalAmountPara = document.querySelector("#total-amount");

let billValue = 0;
let tipPercent = 0;
let numberOfPeople = 0;

setInterval(() => {
  if (numberOfPeople > 0) {
    calcTipAmount();
    calcTotalAmount();
  }
}, 1);

billInput.oninput = (() => {
  billValue = Number(billInput.value);
});

percentBtns.forEach(item => {
  item.addEventListener("click", () => {
    customTip.value = null;

    percentBtns.forEach(item => {
      item.style.backgroundColor = "var(--clr-very-dark-cyan)";
      item.style.color = "#fff";
    });
    
    item.style.backgroundColor = "var(--clr-strong-cyan)";
    item.style.color = "var(--clr-very-dark-cyan)";
  });
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

  percentBtns.forEach(item => {
    item.style.backgroundColor = "var(--clr-very-dark-cyan)";
    item.style.color = "#fff";
  });
});

peopleInput.oninput = (() => {
  numberOfPeople = Number(peopleInput.value);
});

const calcTipAmount = () => {
  let tip = (billValue * tipPercent) / numberOfPeople;
  tipAmountPara.textContent = `$${Math.round(tip * 10) / 10}`;
};

const calcTotalAmount = () => {
  let total = (billValue + billValue * tipPercent) / numberOfPeople;
  totalAmountPara.textContent = `$${Math.round(total * 10) / 10}`;
};

resetBtn.addEventListener("click", () => {
  billValue = 0;
  tipPercent = 0;
  numberOfPeople = 0;

  billInput.value = null;
  customTip.value = null;
  peopleInput.value = null;

  tipAmountPara.textContent = "$0.00";
  totalAmountPara.textContent = "$0.00";
  
  percentBtns.forEach(item => {
    item.style.backgroundColor = "var(--clr-very-dark-cyan)";
    item.style.color = "#fff";
  });
});