import React, { useState } from 'react';
import Aux from '../../hoc/Aux'
import { Link } from 'react-router-dom';


const OrderSummery = React.memo((props) => {

    const ingredientSummery = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>
                        {igKey}: {props.ingredients[igKey]}
                    </span>
                </li>
            )
        })

    return (
        <Aux>
            <h3 >Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummery}
            </ul>
            <p>Continue to checkout?</p>
            {/* <Link to={{ pathname: '/payment', state: { price: props.totalPrice } }} >
                <button style={{ color: 'green' }} ><strong>COUNTINUE</strong></button>
            </Link> */}
             <Link to={{ pathname: '/cart', state: { price: props.totalPrice } }} >
                <button style={{ color: 'green' }} ><strong>COUNTINUE</strong></button>
            </Link>


        </Aux>
    )
})

export default OrderSummery;

