import React from 'react';
import ProductList from '../components/ProductsList';

import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from '../store/actions/action';

export default function ProductsListContainers() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const handleAddToCart = product => {
    dispatch(addToCart(product));
    // console.log('here');
  };
  return (
    <div>
      <ProductList products={products} handleAddToCart={handleAddToCart} />
    </div>
  );
}
