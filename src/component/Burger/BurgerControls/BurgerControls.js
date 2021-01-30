import React, { useState } from 'react';


const BurgerControls = (props) => {

    const [ingredient, setIngredient] = useState({ salad: 0, bacon: 0, meat: 0, cheese: 0 })


    const handleClickMore=(igKey)=>{
        let oldCount = ingredient[igKey]
        let newCount = oldCount + 1
        let updatedIngreds = {...ingredient}
        updatedIngreds[igKey]= newCount
        setIngredient(updatedIngreds)  
    }

    const handleClickLess=(igKey)=>{
        let oldCount = ingredient[igKey]
        let newCount = oldCount - 1
        let updatedIngreds = {...ingredient}
        updatedIngreds[igKey]= newCount
        setIngredient(updatedIngreds)   

    }

    return (
       <div style={styles.mainWrap}>
            <div style={styles.control}>
                {Object.keys(ingredient).map((igKey) => {
                    return (
                        <div style={styles.table}>
                            <div style={styles.igkey}>{igKey}</div>
                            <div style={styles.button}>
                                <button onClick={()=>handleClickMore(igKey)} > More </button>
                                <button onClick={()=>handleClickLess(igKey)}>Less</button>
                            </div>
                        </div>
                    )
                })
                }

            </div>
            </div>

    )
}

export default BurgerControls;

const styles = {
    mainWrap:{
        width:'80%',
        backgroundColor: 'orange',
        marginLeft:'10%',
        // boxShadow: '5px 10px brown',


    },
    igkey:{
        fontWeight:'bold'
    },
    control: {
        margin: '10% 0 0 35%',
        width: '25%'

    },
    table: {
        display: 'flex',
        marginBottom:20,
        justifyContent: 'space-between',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        borderBottom:1
        
    },
    button: {
        justifyContent: 'space-between',

    }
}