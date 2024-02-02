// src/redux/reducer.js
const initialState = {
  orders: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ORDERS_SUCCESS':
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
