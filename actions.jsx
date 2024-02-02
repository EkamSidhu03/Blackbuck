// src/redux/actions.js
export const fetchOrdersSuccess = (orders) => {
  return {
    type: 'FETCH_ORDERS_SUCCESS',
    payload: orders,
  };
};
