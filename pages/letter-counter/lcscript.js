const inputUser = document.querySelectorAll("input")[0];

const counter = () => {
    const valueFinal = inputUser.value.trim().split("").filter(i => i !== ' ');

    const show = document.querySelectorAll("span")[1];
    show.innerText = valueFinal.length; 
};

inputUser.addEventListener("input", counter);