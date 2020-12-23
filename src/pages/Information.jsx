import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Information.css';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {addToBuyer} from '../store/actions/action';

const Information = ({history}) => {
  const {register, handleSubmit} = useForm();

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const onSubmit = data => {
    console.log(data);
    dispatch(addToBuyer(data));
    history.push('/checkout/payment');
  };

  return (
    <div className='Information'>
      <div className='Information-content'>
        <div className='Information-head'>
          <h2>Informacion de contacto:</h2>
        </div>
        <div className='Information-form'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              ref={register}
              type='text'
              placeholder='Nombre completo'
              name='name'
            />{' '}
            <input
              ref={register}
              type='text'
              placeholder='Correo Electronico'
              name='email'
            />
            <input
              ref={register}
              type='text'
              placeholder='Direccion'
              name='address'
            />
            <input ref={register} type='text' placeholder='Apto' name='apto' />
            <input
              ref={register}
              type='text'
              placeholder='Ciudad'
              name='city'
            />
            <input
              ref={register}
              type='text'
              placeholder='Pais'
              name='country'
            />
            <input
              ref={register}
              type='text'
              placeholder='Estado'
              name='state'
            />
            <input
              ref={register}
              type='text'
              placeholder='Codigo postal'
              name='cp'
            />
            <input
              ref={register}
              type='text'
              placeholder='Telefono'
              name='phone'
            />
            <button type='submit'>Pagar</button>
          </form>
        </div>
        <div className='Information-buttons'>
          <div className='Information-back'>
            <Link to='/checkout'>Regresar</Link>
          </div>
          {/* <div className='Information-next'>
            <button type='submit'>Pagar</button>
          </div> */}
        </div>
      </div>
      <div className='Information-sidebar'>
        <h3>Pedido:</h3>
        {cart.map(item => (
          <div className='Information-item'>
            <div className='Information-element'>
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
