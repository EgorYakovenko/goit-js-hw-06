
const decrementEl = document.querySelector("button[data-action='decrement']")
const valueEl = document.querySelector('#value')
const incrementEl = document.querySelector("button[data-action='increment']")

let counterValue = 0;

let onClickdecrement = () => {
    counterValue -= 1 
    valueEl.textContent = counterValue;
}

let onClickincrement = () => {
    counterValue += 1 
    valueEl.textContent = counterValue;
}

decrementEl.addEventListener('click', onClickdecrement);
incrementEl.addEventListener('click', onClickincrement);

