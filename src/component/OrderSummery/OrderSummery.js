import React, { useState }  from 'react';
import Aux from '../../hoc/Aux'

const OrderSummery = (props) => {

    const ingredientSummery = Object.keys(props.ingredients)
        .map(igKey=>{
            return(
                <li key={igKey}>
                <span style={{textTransform:'capitalize'}}> {igKey}: {props.ingredients[igKey]}</span>
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
            <button>CANCEL</button>
            <button type='success'>COUNTINUE</button>

        </Aux>
    )
}

export default OrderSummery;

const styles = {
    Modal:{
        
    
    }
}

