import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_BUYER,
  ADD_NEW_ORDER,
} from '../constants/actionTypes';

export const addToCart = payload => ({
  type: ADD_TO_CART,
  payload,
});

export const removeFromCart = payload => ({
  type: REMOVE_FROM_CART,
  payload,
});

export const addToBuyer = payload => ({
  type: ADD_TO_BUYER,
  payload,
});

export const addNewOrder = payload => ({
  type: ADD_NEW_ORDER,
  payload,
});
