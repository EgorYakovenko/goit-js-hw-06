
const iDcategories = document.querySelector('#categories');
const items = iDcategories.querySelectorAll('li.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
const h2Title = item.querySelector('h2').textContent;
const elements = item.querySelectorAll('ul > li');

  console.log(`Category: ${h2Title}`);
  console.log(`Elements: ${elements.length}`);
});




