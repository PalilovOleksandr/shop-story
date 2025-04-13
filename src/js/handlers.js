// Функції, які передаються колбеками в addEventListners
import { searchProducts } from './products-api';
import { refs } from './refs';
import { renderProducts } from './render-function';
export const handleClick = async event => {
  const categoryBtn = event.target.innerText;
  const productsData = await searchProducts(categoryBtn);
  renderProducts(productsData, refs);
};
