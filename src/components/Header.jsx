import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  const cart = useSelector(state => state.cart);

  return (
    <div className='Header'>
      <p className='Header-title'>
        <Link to='/'>PlatziConf Merch</Link>
      </p>
      <div className='Header-checkout'>
        <Link to='/checkout'>
          <i class='fas fa-shopping-basket'></i>
        </Link>
        {cart.length > 0 && <div className='Header-alert'>{cart.length}</div>}
      </div>
    </div>
  );
}
