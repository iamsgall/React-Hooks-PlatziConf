import {
  ADD_TO_BUYER,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_NEW_ORDER,
} from '../constants/actionTypes';

const initialState = {
  cart: [],
  buyer: [],
  orders: [],
  products: [
    {
      id: '1',
      image: 'https://arepa.s3.amazonaws.com/camiseta.png',
      title: 'Camiseta',
      price: 25,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '3',
      image: 'https://arepa.s3.amazonaws.com/mug.png',
      title: 'Mug',
      price: 10,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '4',
      image: 'https://arepa.s3.amazonaws.com/pin.png',
      title: 'Pin',
      price: 4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '5',
      image: 'https://arepa.s3.amazonaws.com/stickers1.png',
      title: 'Stickers',
      price: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '6',
      image: 'https://arepa.s3.amazonaws.com/stickers2.png',
      title: 'Stickers',
      price: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '7',
      image: 'https://arepa.s3.amazonaws.com/hoodie.png',
      title: 'Hoodie',
      price: 35,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ],
  loading: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== payload.id),
      };
    case ADD_TO_BUYER:
      return {
        ...state,
        buyer: [...state.buyer, payload],
      };
    case ADD_NEW_ORDER:
      return {
        ...state,
        orders: [...state.orders, payload],
      };
    default:
      return state;
  }
};
