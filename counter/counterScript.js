const reset = document.querySelectorAll("button")[2];
const minus = document.querySelectorAll("button")[0];
const plus = document.querySelectorAll("button")[1];
const number = document.querySelector("span");

const plusNumber = () => number.innerHTML = 1 + parseInt(number.innerHTML);
const minusNumber = () => number.innerHTML = parseInt(number.innerHTML) - 1;
const resetNumber = () => number.innerHTML = 0;

plus.addEventListener("click", plusNumber);
minus.addEventListener("click", minusNumber);
reset.addEventListener("click", resetNumber);