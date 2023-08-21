
const iDcategories = document.querySelector('#categories');
const items = iDcategories.querySelectorAll('li.item');
console.log(`Number of categories: ${items.length}`);

items.forEach (categoryItem => {
  
  const categoryTitle = categoryItem.firstElementChild.textContent;
  const categoryElements = categoryItem.lastElementChild.children;
  
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}`);
  
});
