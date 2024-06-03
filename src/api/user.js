import axiosClient from './axiosClient';

const END_POINT = {
  HELLO: 'hello2',
  LOGIN: 'registration/login',
  RIGISTER: 'registration/registration'
};

export const getHelloApi = () => {
  return axiosClient.get(`${END_POINT.HELLO}`);
};

export const LoginApi = (phone, password) => {
  return axiosClient
    .post(`${END_POINT.LOGIN}`, {
      Phone: phone,
      Password: password,
    })
    .then(function (response) {
      console.log('response: ', response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const registerApi = (username, phone, email, gender,address, password) => {
  return axiosClient
    .post(`${END_POINT.RIGISTER}`, {
      Username: username,
      Phone: phone,
      Email:email,
      Gender:gender,
      Address:address,
      Password: password,
    })
    .then(function (response) {
      console.log('response: ', response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};
