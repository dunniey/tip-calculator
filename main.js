let billEl = document.querySelector("#bill");
let noOfPeopleEl = document.querySelector("#people");
let tipPercentages = document.querySelectorAll(".cl-tips");
let tipAmountPerPersonEl = document.querySelector("#tip-per-person");
let totalAmountPerPersonEl = document.querySelector("#total-per-person");
let resetButtonEL=document.querySelector(".reset")
let customTipinputEl=document.querySelector(".custom")
let billAmount = 0;
let noOfPeople = 0;
let tipPercentage = 0;
let custom=0;

billEl.addEventListener("keyup", (e) => {
  billAmount = Number(e.target.value);
  calculateTip();
});

noOfPeopleEl.addEventListener("keyup", (e) => {
  noOfPeople = Number(e.target.value);
  calculateTip();
});
customTipinputEl.addEventListener("keyup",(e) =>{
  button=Number(e.target.value);
  calculateTip();
} )


Array.from(tipPercentages).forEach((tipPercentageEl) => {
  tipPercentageEl.addEventListener("click", (e) => {
    if (e.target.innerText.includes("%")) {
      tipPercentage = Number(e.target.innerText.replace("%", ""));
      applyActiveClass(e.target.innerText);
      calculateTip();
    }
  });
});

function calculateTip() {
  let tipAmount = billAmount * (tipPercentage / 100);
  let totalAmount = billAmount + tipAmount;
  let totalAmountPerPerson = tipAmount / noOfPeople;
  let tipAmountPerPerson = totalAmount / noOfPeople;
let customTipinput=tipAmount/noOfPeople
  updateValues({
    tipAmountPerPerson,
    totalAmountPerPerson,
    customTipinput,
  });
}

function updateValues({ tipAmountPerPerson, totalAmountPerPerson,customTipinput}) {
  tipAmountPerPersonEl.innerText =
    tipAmountPerPerson == Infinity ? 0 : tipAmountPerPerson.toFixed(2);
  totalAmountPerPersonEl.innerText =
    totalAmountPerPerson == Infinity ? 0 : totalAmountPerPerson.toFixed(2);
customTipinputEl.innerText=customTipinput== Infinity ? 0:customTipinput.toFixed(2)
  }

function applyActiveClass(innerTextPect) {
  Array.from(tipPercentages).forEach((tipPercentageEl) => {
    if (tipPercentageEl.innerText == innerTextPect) {
      tipPercentageEl.classList.add("active");
    } else {
      tipPercentageEl.classList.remove("active");
    }
  });
}
customTipinputEl.addEventListener("input",(event)=> {
  let value=Number(event.target.value);
  if(value !== 0 ){tipPercent=value;
  ;}
});


function reset() {
  bill.value = "";
  people.value = "";
 tip.value = "";
 
 resetButtonEL.innerText="reset"
 tipAmountPerPersonEl.innerText = "$0.00";
  totalAmountPerPersonEl.innerText = "$0.00";
  resetButtonEL.setAttribute("disabled","");
}
function renderOutput(tipPerPerson,customTipinput,totalPerPerson) {
  tipAmount.innerText = `$${tipPerPerson}`;
  total.innerText = `$${totalPerPerson}`;
  resetButtonEL.removeAttribute("disabled");
  
} 
/*
const billInput = document.getElementById("bill");
const peopleCountInput = document.getElementById("people");
const customTipinput = document.getElementById("custom");
const tipAmount = document.getElementById("tip-amount");
const total = document.getElementById("total");

const resetButton = document.getElementById("reset");

let bill = undefined;
let peopleCount = undefined;
let tipPercent = undefined;

function calculateResults() {
  const allInputsAreValid = !!bill && !!peopleCount && !!tipPercent;
  const tipPerPerson = (((tipPercent / 100) * bill) / peopleCount).toFixed(2);
  const totalPerPerson = (
    ((tipPercent / 100 + 1) * bill) /
    peopleCount
  ).toFixed(2);
  if (allInputsAreValid) renderOutput(tipPerPerson, totalPerPerson);
}

function uncheckRadioButton() {
  const checkedRadioButton = document.querySelector(
    'input[name="tip"]:checked'
  );
  if (checkedRadioButton) checkedRadioButton.checked = false;
}*/
/*
billInput.addEventListener("input", (event) => {
  const value = Number(event.target.value);
  if (value === 0) {
    event.target.setAttribute("invalid", "");
  } else {
    bill = value;
    event.target.removeAttribute("invalid");
    calculateResults();
  }
});


customTipinput.addEventListener("input", (event) => {
  const value = Number(event.target.value);
  if (value !== 0) {
    tipPercent = value;
    calculateResults();
  }
});


resetButton.addEventListener("click", () => reset());

function reset() {
  billInput.value = "";
  peopleCountInput.value = "";
  customTipinput.value = "";
  tipAmount.innerText = "$0.00";
  total.innerText = "$0.00";
  uncheckRadioButton(); 
  resetButton.setAttribute("disabled", "");
}

function renderOutput(tipPerPerson, totalPerPerson) {
  tipAmount.innerText = `$${tipPerPerson}`;
  total.innerText = `$${totalPerPerson}`;
  resetButton.removeAttribute("disabled");
}*/
/*let billEl = document.querySelector("#bill");
let noOfPeopleEl = document.querySelector("#people");
let tipPercentages = document.querySelectorAll(".cl-tip");
let tipAmountPerPersonEl = document.querySelector("#tip-per-person");
let totalAmountPerPersonEl = document.querySelector("#total-per-person");

let billAmount = 0;
let noOfPeople = 0;
let tipPercentage = 0;

billEl.addEventListener("keyup", (e) => {
  billAmount = Number(e.target.value);
  calculateTip();
});

noOfPeopleEl.addEventListener("keyup", (e) => {
  noOfPeople = Number(e.target.value);
  calculateTip();
});

Array.from(tipPercentages).forEach((tipPercentageEl) => {
  tipPercentageEl.addEventListener("click", (e) => {
    if (e.target.innerText.includes("%")) {
      tipPercentage = Number(e.target.innerText.replace("%", ""));
      applyActiveClass(e.target.innerText);
      calculateTip();
    }
  });
});

function calculateTip() {

  let tipAmount = billAmount * (tipPercentage / 100);
  let totalAmount = billAmount + tipAmount;
  let totalAmountPerPerson = tipAmount / noOfPeople;
  let tipAmountPerPerson = totalAmount / noOfPeople;

  updateValues({
    tipAmountPerPerson,
    totalAmountPerPerson,
  });
}

function updateValues({ tipAmountPerPerson, totalAmountPerPerson }) {
  tipAmountPerPersonEl.innerText =
    tipAmountPerPerson == Infinity ? 0 : tipAmountPerPerson.toFixed(2);
  totalAmountPerPersonEl.innerText =
    totalAmountPerPerson == Infinity ? 0 : totalAmountPerPerson.toFixed(2);
}

function applyActiveClass(innerTextPect) {
  Array.from(tipPercentages).forEach((tipPercentageEl) => {
    if (tipPercentageEl.innerText == innerTextPect) {
      tipPercentageEl.classList.add("active");
    } else {
      tipPercentageEl.classList.remove("active");
    }
  });
}*/