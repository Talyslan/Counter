const inputUser = document.querySelectorAll("input")[0];
const show = document.querySelectorAll("span")[1];

const counter = () => show.innerText = inputUser.value.length; 

inputUser.addEventListener("input", counter);