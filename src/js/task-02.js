const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const iDingredient = document.querySelector('#ingredients')

const newListLi = ingredients.reduce((ingredient, title) => {
  ingredient = document.createElement("li")
  ingredient.textContent += title;
  ingredient.classList.add("item")
  iDingredient.append(ingredient)
}, 0)
