import { GetAllProduct } from '~/MockApi/GetAllProduct';
import axiosClient from './axiosClient'

const END_POINT = {
    TODOS: "hello",
    GET_ALL_PRODUCTS: "GetAllProducts"
}

export const getHelloApi = () => {
    return axiosClient.get(`${END_POINT.TODOS}`);
}

export const getAllProductApi = () => {
    return axiosClient.get(`${END_POINT.GET_ALL_PRODUCTS}`);
}
