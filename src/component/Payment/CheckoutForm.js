import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = (props) => {

    const pay=props.pay
    let price = parseFloat(pay.price).toFixed(2)

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }


    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log(error);
    } else {
      alert('payment done successfully')
    }
  };

    return (
        <div>
            <form onSubmit={handleSubmit} style={styles.form}>
              <h2 style={styles.card}>Payable amout: ${price}</h2>
                <CardElement/>
                <button type="submit" disabled={!stripe} style={styles.button}>
                    Pay </button>
            </form>
        </div>
    )
}
export default CheckoutForm;

const styles = {
  form:{
    maxWidth:'400px',
    margin:'0 auto',
  
  },
  button:{
    marginTop:50,
    backgroundColor:'green'
  },
  card:{
    marginBottom:'50px'
  }
}