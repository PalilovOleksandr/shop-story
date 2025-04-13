// Функції для роботи з бекендом
import axios from 'axios';

export const getCategories = async () => {
  const { data } = await axios('https://dummyjson.com/products/category-list');
  return data;
};

export const getProducts = async () => {
  const currentPage = 1;
  const url = `https://dummyjson.com/products?limit=12&skip=${
    (currentPage - 1) * 12
  }`;
  const { data } = await axios(`${url}`);
  return data.products;
};

export const searchProducts = async category => {
  const { data } = await axios(
    `https://dummyjson.com/products/category/${category}`
  );
  return data.products;
};
