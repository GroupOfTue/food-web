import axiosClient from './axiosClient'

const END_POINT = {
    TODOS: "hello",
}

export const getHelloApi = () => {
    return axiosClient.get(`${END_POINT.TODOS}`);
}
