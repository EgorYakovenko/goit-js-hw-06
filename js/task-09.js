
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnChangeColor = document.querySelector('.change-color')
const colorValue = document.querySelector('.color')

const changeBackroundColor = () => {
  const randomHexColor = getRandomHexColor()
  document.body.style.backgroundColor = randomHexColor;
  colorValue.textContent = randomHexColor;
}
  btnChangeColor.addEventListener('click',changeBackroundColor)
