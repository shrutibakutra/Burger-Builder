import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm'

const stripePromise = loadStripe('pk_test_51IHYUIF0HQpi7oAefwAQqUcjO3zm38bWtlYFMXtc09xo0iQwVKd0UVDQJ1KCxATHLfsLJo3bXXU4TbKzc7N6qbf100J0XEUVLG   ');

const Payment = (props) => {


   let price = props.location.state

    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm  pay={price}/>
            </Elements>
        </div>
    )
}
export default Payment;
