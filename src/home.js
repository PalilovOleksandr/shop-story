//Логіка сторінки Home
import { refs } from './js/refs';
import { getCategories, getProducts } from './js/products-api';
import { renderCategories, renderProducts } from './js/render-function';
import { handleClick } from './js/handlers';

const init = async () => {
  try {
    const categoriesData = await getCategories();
    const categories = categoriesData.map(name => name);
    const filters = ['All', ...categories];
    renderCategories(filters, refs);
    refs.categoriesList.addEventListener('click', handleClick);
    const productsData = await getProducts();
    renderProducts(productsData, refs);
  } catch (error) {
    console.log(error);
  }
};

init();
