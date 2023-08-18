
const sizeControl = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

const changeOfSize = () => {
    text.style.fontSize = sizeControl.value + 'px';
}

const onInput =() => {
const control = sizeControl.value + 'px';
      text.style.fontSize = control;
}
onInput()

sizeControl.addEventListener('input', changeOfSize);
