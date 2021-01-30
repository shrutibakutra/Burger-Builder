import React, { useState } from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../component/Burger/Burger'


const BurgerBuilder = (props) => {

    const [ingredient, setIngredient] = useState({ salad: 0, bacon: 0, meat: 0, cheese: 0 })
    const [disableLess, setDisableLess] = useState(true)
    const [totalPrice, setTotalPrice] = useState(3)

    const handleClickMore = (igKey) => {
        let oldCount = ingredient[igKey]
        let newCount = oldCount + 1
        let updatedIngreds = { ...ingredient }
        updatedIngreds[igKey] = newCount
        setIngredient(updatedIngreds)
        setDisableLess(false)
    }

    const handleClickLess = (igKey) => {
        let oldCount = ingredient[igKey]
        let newCount = oldCount - 1
        let updatedIngreds = { ...ingredient }
        updatedIngreds[igKey] = newCount
        setIngredient(updatedIngreds)

    }


    return (
        <Aux>
            <Burger ingredient={ingredient} />
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
        </Aux>
    )
}

export default BurgerBuilder;

const styles = {
    mainWrap: {
        marginTop:'20%',
        width: '80%',
        backgroundColor: 'orange',
        marginLeft: '10%',
        // boxShadow: '5px 10px brown',


    },
    igkey: {
        fontWeight: 'bold'
    },
    control: {
        margin: '10% 0 0 35%',
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