
 const inputElement = document.getElementById('validation-input');

const onCheckEnterText = () => {
  const inputValue = inputElement.value;
      const expectedLength = inputElement.getAttribute('data-length');

      if (inputValue.length === Number(expectedLength)) {
        inputElement.classList.remove('invalid');
        inputElement.classList.add('valid');
      } else {
        inputElement.classList.remove('valid');
        inputElement.classList.add('invalid');
      }
      
}

inputElement.addEventListener('blur', onCheckEnterText);





    
    
