import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Checkout.css';
import {removeFromCart} from '../store/actions/action';
import {useSelector, useDispatch} from 'react-redux';

const Checkout = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  // FIXME:
  const handleRemove = product => () => {
    dispatch(removeFromCart(product));
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className='Checkout'>
      <div className='Checkout-content'>
        {cart.length > 0 ? (
          <h3>List de pedidos: </h3>
        ) : (
          <h3>Sin pedidos ...</h3>
        )}
        {cart.map(item => (
          <div className='Checkout-item'>
            <div className='Checkout-element'>
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
            <button type='button' onClick={handleRemove(item)}>
              <i class='far fa-trash-alt'></i>
            </button>
          </div>
        ))}

        {cart.length > 0 && (
          <div className='Checkout-sidebar'>
            <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
            <Link to='/checkout/information'>
              {' '}
              <button type='button'>Continuar pedido</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
