import React from 'react';
import PropTypes from 'prop-types';

const BurgerIngredient = (props) => {
    let ingredient = '';

    switch (props.type) {
        case ('breadBottom'):
            ingredient = <div style={styles.breadBottom}>
            </div>;
            break;
        case ('breadTop'):
            ingredient = <div style={styles.breadTop}>
                <div style={styles.seeds}></div>
                <div style={styles.seed1}></div>
                <div style={styles.seed2}></div>
                <div style={styles.seed3}></div>
                <div style={styles.seed4}></div>
                <div style={styles.seed5}></div>
                <div style={styles.seed6}></div>





            </div>;
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

BurgerIngredient.prototype ={
    type : PropTypes.string.isRequired
}

const styles = {
    breadBottom: {
        height: '15%',
        width: '30%',
        background: 'linearGradient(#F08E4A, #e27b36)',
        borderRadius: '0 0 30px 30px',
        boxShadow: 'inset 0 -38px #e27b36',
        margin: '1% auto'
    },
    breadTop: {
        height: '50%',
        width: '30%',
        background: 'linear-gradient(#bc581e, #e27b36)',
        borderRadius: '50% 50% 0 0',
        margin: '1% auto',
        position: 'relative',
        boxShadow: 'inset -15px 0 #c15711'

    },
    meat: {
        width: '30%',
        height: '10%',
        background: 'linear-gradient(#7f3608, #702e05)',
        margin: 'auto',
        borderRadius: '15px',
    },
    salad: {
        width: '30%',
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
    },
    seeds:{
        width: '3%',
        height: '5%',
        position: 'absolute',
        backgroundColor: 'white',
        left: '30%',
        top: '30%',
        borderRadius: '40%',
        transform: 'rotate(-20deg)',
        boxShadow: 'inset -2px -3px #c9c9c9'
    },
    seed1:{
        content: "",
        width: '2%',
        height: '5%',
        position: 'absolute',
        backgroundColor: 'white',
        left: '10%',
        top: '30%',
        borderRadius: '40%',
        transform: 'rotate(60deg)',
        boxShadow: 'inset -1px 2px #c9c9c9',
    },
    seed2:{
        content: "",
        width: '2%',
        height: '5%',
        position: 'absolute',
        backgroundColor: 'white',
        left: '50%',
        top: '30%',
        borderRadius: '40%',
        transform: 'rotate(30deg)',
        boxShadow: 'inset -1px 2px #c9c9c9',
    },
    seed3:{
        content: "",
        width: '2%',
        height: '5%',
        position: 'absolute',
        backgroundColor: 'white',
        left: '70%',
        top: '30%',
        borderRadius: '40%',
        transform: 'rotate(120deg)',
        boxShadow: 'inset -1px 2px #c9c9c9',
    },
    seed4:{
        content: "",
        width: '2%',
        height: '5%',
        position: 'absolute',
        backgroundColor: 'white',
        left: '90%',
        top: '30%',
        borderRadius: '40%',
        transform: 'rotate(20deg)',
        boxShadow: 'inset -1px 2px #c9c9c9',
    },
    seed5:{
        content: "",
        width: '2%',
        height: '5%',
        position: 'absolute',
        backgroundColor: 'white',
        left: '70%',
        top: '30%',
        borderRadius: '40%',
        transform: 'rotate(20deg)',
        boxShadow: 'inset -1px 2px #c9c9c9',
    },
    seed6:{
        content: "",
        width: '2%',
        height: '5%',
        position: 'absolute',
        backgroundColor: 'white',
        left: '80%',
        top: '30%',
        borderRadius: '40%',
        transform: 'rotate(20deg)',
        boxShadow: 'inset -1px 2px #c9c9c9',
    }

}

export default BurgerIngredient;