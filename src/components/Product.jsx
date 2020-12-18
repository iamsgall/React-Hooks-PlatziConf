import React from 'react';
import '../styles/Products.css';

export default function Product({product, handleAddToCart}) {
  return (
    <div className='Products-item'>
      <img src={product.image} alt={product.title} />
      <div className='Products-item-info'>
        <h5 className='text-center'>{product.title}</h5>
        <p className='text-center'>
          Price <span>${product.price}</span>
        </p>
        <p className='text-center'>{product.description}</p>
      </div>
      <button
        type='button'
        style={{color: '#fff', fontSize: 15}}
        onClick={() => handleAddToCart(product)}
      >
        <b>Comprar</b>
      </button>
    </div>
  );
}
