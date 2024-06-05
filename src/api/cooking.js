import axiosClient from './axiosClient';

const END_POINT = {
  GET_ALL_COOKING: 'Cooking/GetAllCooking',
};

export const getAllCookingApi = () => {
  return axiosClient.get(`${END_POINT.GET_ALL_COOKING}`);
};