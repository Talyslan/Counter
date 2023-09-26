const number = document.querySelector("span");
const plus = document.querySelectorAll("button")[0];
const minus = document.querySelectorAll("button")[1];

const plusNumber = () => number.innerHTML = 1 + parseInt(number.innerHTML);
const minusNumber = () => number.innerHTML = parseInt(number.innerHTML) - 1;

plus.addEventListener("click", plusNumber);
minus.addEventListener("click", minusNumber);