//Функцію для створення, рендеру або видалення розмітки
export const renderCategories = (filters, refs) => {
  const markup = filters
    .map(
      filter => `<li class="categories__item">
  <button class="categories__btn" type="button">${filter}</button>
</li>
`
    )
    .join('');
  refs.categoriesList.innerHTML = markup;
};

export const renderProducts = (products, refs) => {
  const markup = products
    .map(
      ({ id, thumbnail, title, brand, category, price }) => `
    <li class="products__item" data-id="${id}">
    <img class="products__image" src="${thumbnail}" alt="${title}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${brand}</span></p>
    <p class="products__category">Category: ${category}</p>
    <p class="products__price">Price: ${price}</p>
 </li>
`
    )
    .join('');
  refs.productsList.innerHTML = markup;
};
