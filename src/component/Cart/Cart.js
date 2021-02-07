import React, { useState ,useReducer} from 'react';
import { Link } from 'react-router-dom'


const reducer = (initialState,action)=>{
    switch(action.type) {
        case 'decrease':
            if(initialState.burgerData[0].quantity >= 2){
                return {
                    ...initialState.burgerData[0], 
                    burgerData:[{ quantity:initialState.burgerData[0].quantity - 1,
                    grandTotal:(initialState.burgerData[0].quantity - 1 ) * initialState.burgerData[0].basePrice,
                    basePrice:initialState.burgerData[0].basePrice
                },
                    ...initialState.burgerData
                ]
            };
            };
        case 'increase':
            console.log(initialState.burgerData[0].quantity , initialState.burgerData[0].grandTotal)
            if(initialState.burgerData[0].quantity >= 1){

            return {
                ...initialState.burgerData[0], 
                burgerData:[{ quantity:initialState.burgerData[0].quantity + 1,
                grandTotal:(initialState.burgerData[0].quantity +1 ) * initialState.burgerData[0].basePrice,
                basePrice:initialState.burgerData[0].basePrice
            },
                ...initialState.burgerData
            ]
        }
    }
    }
}

const Cart = (props) => {
    let orderDetails = props.location.state
    const initialState = {
        burgerData:[{ 
            quantity: 1,
            grandTotal: orderDetails.price,
            basePrice:orderDetails.price
        }]
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1> Your Cart </h1>
            <div style={styles.box} >
                <div style={styles.insidebox}>
                    <div>
                        <p style={styles.burgerName}> {orderDetails && orderDetails.name}</p>
                        <img
                        ></img>
                    </div>
                    <div style={styles.rightSide}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p style={styles.burgerName}>Quantity: {state.burgerData[0].quantity}</p>
                            <div style={styles.button}>
                                <button style={{ borderRadius: 3 }} onClick={() => dispatch({type:'increase'}) }>+</button>
                                <button style={{ borderRadius: 3 }} onClick={() => dispatch({type:'decrease'})}>-</button>

                            </div>
                        </div>
                        <p style={styles.burgerName}>Price: ${orderDetails && orderDetails.price}</p>
                        <p style={styles.burgerName}>Total: ${  state.burgerData[0].grandTotal}</p>
                    </div>
                </div>
            </div>
            <Link to={{ pathname: '/payment', state: { price: state.burgerData[0].grandTotal } }}>
                <button style={styles.checkout}> Proceed to Check Out</button>
            </Link>
        </div>
    )
}
export default Cart;

const styles = {
    box: {
        height: '250px',
        width: '80%',
        borderColor: 'orange',
        borderStyle: 'solid',
        marginLeft: '10%',
        boxShadow: ' 0 4px 8px 0 rgba(0,0,0,0.2)',
    },
    insidebox: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    rightSide: {
        marginRight: '20%',
        marginTop: '3%'
    },
    burgerName: {
        color: 'green',
        fontWeight: 600,
        marginLeft: '20px',
        marginTop: '20px'
    },
    button: {
        display: 'flex',
        marginLeft: '20px',
        height: '25px',
        marginTop: '10%',
        borderRadius: '25%'
    },
    checkout:{
        backgroundColor:'green',
        borderRadius: '10%',
        marginLeft: '45%',
        marginTop:'5%'
    },
}