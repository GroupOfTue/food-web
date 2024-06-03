import axiosClient from './axiosClient';

const END_POINT = {
  TODOS: 'hello',
  GET_ALL_PRODUCT_API: 'products/GetAllProducts',
  GET_ALL_PRODUCTS_BY_CATEGORY: 'Products/GetCategoriesWithProducts',
  GET_PRODUCT_BY_CATEGORYID: 'Products/GetProductsByCategory',
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

export const getProductByCateIdApi = (cateId) => {
    return axiosClient.get(`${END_POINT.GET_PRODUCT_BY_CATEGORYID}/${cateId}`);
  };




//   export const registerApi = (username, phone, email, gender,address, password) => {
//     return axiosClient
//       .post(`${END_POINT.RIGISTER}`, {
//         Username: username,
//         Phone: phone,
//         Email:email,
//         Gender:gender,
//         Address:address,
//         Password: password,
//       })
//       .then(function (response) {
//         console.log('response: ', response);
//         return response;
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };