const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(Number of categories: ${categoriesItems.length});

categoriesItems.forEach(categoryItem => {
  const categoryTitle = categoryItem.querySelector('h2').textContent;
  const categoryElements = categoryItem.querySelectorAll('li');
  console.log(Category: ${categoryTitle});
  console.log(Elements: ${categoryElements.length});
});