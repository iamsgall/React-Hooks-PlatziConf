import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import '../styles/Payment.css';
import {PayPalButton} from 'react-paypal-button-v2';
import {addNewOrder} from '../store/actions/action';

const Payment = ({history}) => {
  const cart = useSelector(state => state.cart);
  const buyer = useSelector(state => state.buyer);
  const dispatch = useDispatch();

  const paypalOtions = {
    clientId:
      'access_token$sandbox$q9b79bst9q32zck9$4dfa52e6cf54343600160a167ad0feda',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = data => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      dispatch(addNewOrder(newOrder));
      history.push('/checkout/success');
    }
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className='Payment'>
      <div className='Payment-content'>
        <h3>Resumen del pedido:</h3>
        <div className='Payment-button'>
          <PayPalButton
            paypalOptions={paypalOtions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={data => handlePaymentSuccess(data)}
            onPaymentError={error => console.log(error)}
            onPaymentCancel={data => console.log(data)}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payment;
