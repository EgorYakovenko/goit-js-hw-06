
const inputEl = document.querySelector('#name-input')
const outputEl = document.querySelector('#name-output') 

const logHandler = (event) => {
    outputEl.textContent = inputEl.value
    if (outputEl.textContent === '') {
        outputEl.textContent = 'Anonymous';
    } 
    
}

inputEl.addEventListener('input', logHandler)
