import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Map from '../Map/Map'
import { withRouter } from 'react-router-dom';


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
      alert('Payment done successfully')
      props.history.push({
        pathname:'/'
      })
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
            {/* <Map style={styles.map}/> */}
        </div>

    )
}
export default withRouter(CheckoutForm);

const styles = {
  form:{
    maxWidth:'400px',
    margin:'0 auto',
  
  },
  button:{
    marginTop:50,
    backgroundColor:'green',
    marginBottom:'50%'

  },
  card:{
    marginBottom:'50px'
  },
  map:{
    marginTop:'100%'
  }
}