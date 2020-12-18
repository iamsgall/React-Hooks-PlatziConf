import React from 'react';
import Product from './Product';
import '../styles/Products.css';

export default function ProductsList({products, handleAddToCart}) {
  return (
    <div className='Products'>
      <div className='Products-items'>
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
