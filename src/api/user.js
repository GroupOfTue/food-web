import axiosClient from './axiosClient'

const END_POINT = {
    TODOS: "hello2",
    LOGIN: "registration/login",
}

export const getHelloApi = () => {
    return axiosClient.get(`${END_POINT.TODOS}`);
}

export const postHelloApi = (phone, password) => {

    return axiosClient.post(`${END_POINT.LOGIN}`, {
        Phone: phone,
        Password: password
      })
      .then(function (response) {
        console.log("response: ", response);
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
}
