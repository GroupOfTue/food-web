import axiosClient from './axiosClient';

const END_POINT = {
  ORDER: 'Order/Order',
  ORDER_DELIVERY: 'Order/GetOrderDelivery',
  ORDER_COMPLETE: 'Order/GetOrderComplete',
  ORDER_CANCEL: 'Order/GetOrderCancel',
  ORDER_SET_ORDER_COMPLETE: 'Order/SetOrderComplete',
  ORDER_SET_ORDER_CANCEL: 'Order/SetOrderCompleteCancel',
};

export const getOrderApi = () => {
  return axiosClient.get(`${END_POINT.ORDER}`);
};

export const addOrderApi = (userId, address, email, phone, note, status, productId, totalPrice, quantity) => {
  console.log('quantity ', quantity);
  return axiosClient
    .post(`${END_POINT.ORDER}`, {
      userId,
      address,
      email,
      phone,
      note,
      status,
      totalPrice,
      productId,
      quantity,
    })
    .then(function (response) {
      console.log('response order: ', response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const SetOrderCompleteApi = (OrderId) => {
  console.log("hello PRODUCT DI", OrderId);
  return axiosClient.patch(`${END_POINT.ORDER_SET_ORDER_COMPLETE}?ProductId=${OrderId}`);
};

export const SetOrderCancelApi = (OrderId) => {
  return axiosClient.patch(`${END_POINT.ORDER_SET_ORDER_CANCEL}?ProductId=${OrderId}`, {
    OrderId,
  });
};

export const GetOrderDeliveryApi = () => {
  return axiosClient.get(`${END_POINT.ORDER_DELIVERY}`);
};

export const GetOrderCompleteApi = () => {
  return axiosClient.get(`${END_POINT.ORDER_COMPLETE}`);
};

export const GetOrderCancelApi = () => {
  return axiosClient.get(`${END_POINT.ORDER_CANCEL}`);
};

