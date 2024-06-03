import axiosClient from './axiosClient';

const END_POINT = {
  TODOS: 'hello',
  GET_ALL_PRODUCT_API: 'products/GetAllProducts',
  GET_ALL_PRODUCTS_BY_CATEGORY: 'Products/GetCategoriesWithProducts',
};

export const getHelloApi = () => {
  return axiosClient.get(`${END_POINT.TODOS}`);
};

export const getAllProductApi = () => {
  return axiosClient.get(`${END_POINT.GET_ALL_PRODUCT_API}`);
};

export const getAllProductByCateApi = () => {
  return axiosClient.get(`${END_POINT.GET_ALL_PRODUCTS_BY_CATEGORY}`);
};
