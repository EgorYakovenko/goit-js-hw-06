
const inputElement = document.querySelector('#validation-input');

const onCheckEnterText = () => {
const inputLength = parseInt(inputElement.getAttribute('data-length'));
const inputValue = inputElement.value;
    
    if (inputValue.length === inputLength) {
        inputElement.classList.add('valid');
      } else {
        inputElement.classList.add('invalid');
      }
}
inputElement.addEventListener('blur', onCheckEnterText);

    
    
