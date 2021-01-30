import React, { useState } from 'react';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient'


const Burger = (props) => {

    const [ingredient, setIngredient] = useState([Object.keys(props.ingredient)])
   
    return (
        <div>
            <div style={styles.burger}>
                <BurgerIngredient type="breadTop" />
                { ingredient[0] && ingredient[0].map((_igkey) => {
                    return [...Array( props.ingredient[_igkey]) ].map((_,i)=>{
                        
                            return(
                                <BurgerIngredient key={_igkey + i} type={_igkey} />
                            )
                        })}
                        
                    )
                    // :<p> Please start adding your ingredients</p>
                }
                <BurgerIngredient type="breadBottom" />
            </div>
        </div>

    )
}

export default Burger;

const styles = {
    burger: {
        width: '100%',
        // margin: 'auto',
        height: 250,
        overFlow: 'scroll',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 12,
        marginBottom:'10%'
    }
}