import React, { useState } from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../component/Burger/Burger'


let INGREDIENT_PRICE = {
    salad: 0.3,
    bacon: 0.5,
    meat: 0.8,
    cheese: 0.2
}

const BurgerBuilder = (props) => {

    const [ingredient, setIngredient] = useState({ salad: 0, bacon: 0, meat: 0, cheese: 0 })
    const [disableLess, setDisableLess] = useState(true)
    const [totalPrice, setTotalPrice] = useState(3)
    const [purchasable, setPurchasable] = useState(false)


    const handleClickMore = (igKey) => {

        //add ingredient
        let oldCount = ingredient[igKey]
        let newCount = oldCount + 1
        let updatedIngreds = { ...ingredient }
        updatedIngreds[igKey] = newCount
        setIngredient(updatedIngreds)
        setDisableLess(false)

        //set plus price 
        let oldPrice = INGREDIENT_PRICE[igKey]
        let newPrice = oldPrice + totalPrice
        setTotalPrice(newPrice)
        handlePurchasable(igKey,updatedIngreds)


    }

    const handleClickLess = (igKey) => {
        //set less ingredients
        let oldCount = ingredient[igKey]
        let newCount = oldCount - 1
        let updatedIngreds = { ...ingredient }
        updatedIngreds[igKey] = newCount
        setIngredient(updatedIngreds)

        //set minus price 
        let oldPrice = INGREDIENT_PRICE[igKey]
        let newPrice = totalPrice - oldPrice
        setTotalPrice(newPrice)

        handlePurchasable(igKey,updatedIngreds)
    }

    const handlePurchasable = (igKey,updatedIngreds) => {
        
        if (updatedIngreds[igKey] > 0) {
            setPurchasable(true)
        }
    }

    const check = () => {
        console.log(purchasable)
    }


    return (
        <Aux>
            <Burger ingredient={ingredient} />
            <div style={styles.priceBox}>Price: <strong>{totalPrice.toFixed(2)}</strong></div>
            <div style={styles.mainWrap}>

                <div style={styles.control}>
                    {Object.keys(ingredient).map((igKey) => {
                        return (
                            <div style={styles.table}>
                                <div style={styles.igkey}>{igKey}</div>
                                <div style={styles.button}>
                                    <button onClick={() => handleClickMore(igKey)}> More </button>
                                    <button onClick={() => handleClickLess(igKey)} disabled={disableLess}>Less</button>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>

            </div>
            <button style={{
                height: '10%',
                width: '10%',
                backgroundColor: purchasable ? 'green' : '#17afb',
                margin: '5% 10% 5% 45%',
                color: 'black'
            }} diabled={!purchasable} onClick={() => check()}> ORDER NOW </button>

        </Aux>
    )
}

export default BurgerBuilder;

const styles = {
    mainWrap: {
        width: '60%',
        backgroundColor: 'orange',
        marginLeft: '20%',
        // boxShadow: '5px 10px brown',
    },
    priceBox: {
        backgroundColor: '#17afbf',
        // height:'15%',
        width: '10%',
        marginLeft: '45%',
        textAlign: 'center'
    },
    igkey: {
        fontWeight: 'bold'
    },
    control: {
        margin: '5% 0 0 35%',
        width: '25%'

    },
    table: {
        display: 'flex',
        marginBottom: 20,
        justifyContent: 'space-between',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        borderBottom: 1

    },
    button: {
        justifyContent: 'space-between',

    }
}