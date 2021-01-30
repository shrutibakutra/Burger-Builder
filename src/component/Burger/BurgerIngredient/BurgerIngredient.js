import React from 'react';
import PropTypes from 'prop-types';

const BurgerIngredient = (props) => {
    let ingredient = '';

    switch (props.type) {
        case ('breadBottom'):
            ingredient = <div style={styles.breadBottom}></div>;
            break;
        case ('breadTop'):
            ingredient = <div style={styles.breadTop}></div>;
            break;
        case ('meat'):
            ingredient = <div style={styles.meat}></div>;
            break
        case ('salad'):
            ingredient = <div style={styles.salad}></div>;
            break
        case ('cheese'):
            ingredient = <div style={styles.cheese}></div>;
            break
        case ('bacon'):
            ingredient = <div style={styles.bacon}></div>;
            break;
        default:
            ingredient= null;

    }
    return ingredient;
}

BurgerIngredient.PropTypes ={
    type : PropTypes.string.isRequired
}

const styles = {
    breadBottom: {
        height: '15%',
        width: '30%',
        background: 'linearGradient(#F08E4A, #e27b36)',
        borderRadius: '70% 70% 20% 20%',
        boxShadow: 'inset 0px -30px #c15711',
        margin: '1% auto'
    },
    breadTop: {
        height: '30%',
        width: '30%',
        background: 'linear-gradient(#bc581e, #e27b36)',
        borderRadius: '50% 50% 0 0',
        margin: '1% auto',
        position: 'relative'
    },
    meat: {
        width: '30%',
        height: '10%',
        background: 'linear-gradient(#7f3608, #702e05)',
        margin: 'auto',
        borderRadius: '15px',
    },
    salad: {
        width: '35%',
        height: '10%',
        margin: 'auto',
        background: 'linear-gradient(#228c1d, #91ce50)',
        borderRadius: '20px',
    },
    cheese: {
        width: '30%',
        height: '4.5%',
        margin: '1% auto',
        background: 'linear-gradient(#f4d004, #d6bb22)',
        borderRadius: '20px',
    },
    bacon: {
        width: '30%',
        height: '4%',
        background: 'linear-gradient(#bf3813, #c45e38)',
        margin: '1% auto',
    }

}

export default BurgerIngredient;