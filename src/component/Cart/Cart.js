import React, { useReducer } from 'react';
import { Link } from 'react-router-dom'
import image4 from '../../Images/Burgers/burger4.jpg'


const reducer = (initialState, action) => {
    switch (action.type) {
        case 'decrease':
            if (initialState.burgerData[0].quantity >= 2) {
                return {
                    ...initialState.burgerData[0],
                    burgerData: [{
                        quantity: initialState.burgerData[0].quantity - 1,
                        grandTotal: (initialState.burgerData[0].quantity - 1) * initialState.burgerData[0].basePrice,
                        basePrice: initialState.burgerData[0].basePrice
                    },
                    ...initialState.burgerData
                    ]
                };
            }else{
                alert("You have to buy atlease one burger! :)")
            };
        case 'increase':
            // console.log(initialState.burgerData[0].quantity, initialState.burgerData[0].grandTotal)
            if (initialState.burgerData[0].quantity >= 1) {
                return {
                    ...initialState.burgerData[0],
                    burgerData: [{
                        quantity: initialState.burgerData[0].quantity + 1,
                        grandTotal: ((initialState.burgerData[0].quantity + 1) * initialState.burgerData[0].basePrice).toFixed(2),
                        basePrice: initialState.burgerData[0].basePrice,
                        disable: false
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
        burgerData: [{
            quantity: 1,
            grandTotal: orderDetails && orderDetails.price,
            basePrice: orderDetails && orderDetails.price,
            disable: true
        }]
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1> Your Cart </h1>

            {orderDetails ?
                <div>
                    <div style={styles.box} >
                        <div style={styles.insidebox}>
                            <div>
                                <p style={styles.burgerName}> {orderDetails.name ? orderDetails.name : 'Your Favourite Burger'}</p>
                                <img
                                src={image4}
                                height={'80%'}
                                width={'70%'}
                                style={styles.image}
                                ></img>
                            </div>
                            <div style={styles.rightSide}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p style={styles.burgerName}>Quantity: {state.burgerData[0].quantity}</p>
                                    <div style={styles.button}>
                                        <button style={{ borderRadius: 3 }}
                                             onClick={() => dispatch({ type: 'increase' })} >
                                            + </button>
                                        <button style={{ borderRadius: 3 }}
                                            disabled={state.burgerData[0].disable}
                                          onClick={() => dispatch({ type: 'decrease' })} >
                                            - </button>

                                    </div>
                                </div>
                                <p style={styles.burgerName}>Price: ${orderDetails && orderDetails.price}</p>
                                <p style={styles.burgerName}>Total: ${(state.burgerData[0].grandTotal)}</p>
                            </div>
                        </div>
                    </div>
                    <Link to={{ pathname: '/payment', state: { price: state.burgerData[0].grandTotal } }}>
                        <button style={styles.checkout}> Proceed to Check Out</button>
                    </Link>
                </div>

                :
                <div><p style={styles.note}>Please start adding your burger! </p>
                    <p style={styles.note2}>I recommend, Shruti Special Burger !!!!</p>
                    <Link to={'/'}>
                        <button> Go back to Menu</button>
                    </Link>
                </div>}
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
        marginTop: '10px'
    },
    button: {
        display: 'flex',
        marginLeft: '50px',
        height: '25px',
        marginTop: '5%',
        borderRadius: '25%',
        paddingTop:'-0.5px'
    },
    checkout: {
        backgroundColor: 'green',
        borderRadius: '10%',
        marginLeft: '45%',
        marginTop: '5%'
    },
    note: {
        position: 'absolute',
        top: '50%',
        left: '40%',
        marginTop: '-50px',
        height: '100px',
        color: 'orange'
    },
    note2: {
        position: 'absolute',
        top: '60%',
        left: '35%',
        marginTop: '-50px',
        height: '100px',
        color: 'orange',
        fontSize: 25
    },
    image:{
        marginLeft:'5%'
    }
}