import React, { useState } from 'react';
import Aux from '../../hoc/Aux'

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const OrderSummery = (props) => {


    const ingredientSummery = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}> {igKey}: {props.ingredients[igKey]}</span>
                </li>
            )
        })

    const handleCheckOut = () => {
        alert('price:' + props.totalPrice)
    }

    


    return (
        <Aux>
            <h3 >Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummery}
            </ul>
            <p>Continue to checkout?</p>
            <button style={{ color: 'green' }} onClick={() => handleCheckOut()}><strong>COUNTINUE</strong></button>

            {/* <form onSubmit={handleSubmit}>
                <CardElement />

                <button style={{ color: 'green' }} type="submit" disabled={!stripe} onClick={() => handleCheckOut()}><strong>COUNTINUE</strong></button>

            </form> */}

        </Aux>
    )
}

export default OrderSummery;

