import React, { useEffect, useState ,useRef} from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../component/Burger/Burger'
import Modal from '../../component/Modal/Modal'
import OrderSummery from '../../component/OrderSummery/OrderSummery'

let INGREDIENT_PRICE = {
    salad: 0.3,
    bacon: 0.5,
    meat: 0.8,
    cheese: 0.2
}

const BurgerBuilder = (props) => {

    const [ingredient, setIngredient] = useState({ salad: 0, bacon: 0, meat: 0, cheese: 0 })
    const [disableLess, setDisableLess] = useState({ salad: true, bacon: true, meat: true, cheese: true })
    const [totalPrice, setTotalPrice] = useState(3)
    const [purchasable, setPurchasable] = useState(false)
    const [showModal, setshowModal] = useState(false)
    const node = useRef();

    //add more ingredients to burger
    const handleClickMore = (igKey) => {

        //add ingredient
        let oldCount = ingredient[igKey]
        let newCount = oldCount + 1
        let updatedIngreds = { ...ingredient }
        updatedIngreds[igKey] = newCount
        setIngredient(updatedIngreds)


        //manage less button
        let disButtons = {...disableLess}
        if(updatedIngreds[igKey]<=0){
            disButtons[igKey]=true
            setDisableLess(disButtons)
        }else{
            disButtons[igKey] = false
            setDisableLess(disButtons)
        }

        //set plus price 
        let oldPrice = INGREDIENT_PRICE[igKey]
        let newPrice = oldPrice + totalPrice
        setTotalPrice(newPrice)
        handlePurchasable(igKey,updatedIngreds)


    }

    //reduce ingredients from burger
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

        //manage less button
        let disButtons = {...disableLess}
        if(updatedIngreds[igKey]<=0){
            disButtons[igKey]=true
            setDisableLess(disButtons)
        }else{
            disButtons[igKey] = false
            setDisableLess(disButtons)
        }

        handlePurchasable(igKey,updatedIngreds)
    }

    //activate/deactivate ordernow button
    const handlePurchasable = (igKey,updatedIngreds) => {
        
        if (updatedIngreds[igKey] > 0) {
            setPurchasable(true)
        }
    }

    const handleModal = () => {
        if(totalPrice > 3){
            setshowModal(true)
        }else{
            alert('Please add one or more ingredient to make it tasty :)')
        }
    }

    //close modal
    useEffect(() => {
        document.addEventListener('mousedown',handleClickOutSide);
        return () => {
            document.removeEventListener("mousedown", handleClickOutSide);
          };
    },[])
    const handleClickOutSide=(e)=>{
        if (node.current.contains(e.target)) {
            return;
          }
        setshowModal(false)
    }

    return (
        <Aux >
            <div ref={node}>
            {showModal ? <Modal  show={showModal}>
                <OrderSummery ingredients={ingredient} totalPrice={totalPrice}/>
            </Modal>
            :''}
            </div>

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
                                    <button key={igKey} onClick={() => handleClickLess(igKey)} disabled={disableLess[igKey]}>Less</button>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>

            </div>
           
            <button style={{
                height: '5%',
                width: '10%',
                borderRadius:5,
                position:'absolute',
                backgroundColor: purchasable ? 'green' : '#17afb',
                margin: '1% 10% 5% 45%',
                color: 'black'
            }} diabled={!purchasable} onClick={() => handleModal()}> ORDER NOW </button>

        </Aux>
    )
}

export default BurgerBuilder;

const styles = {
    mainWrap: {
        width: '60%',
        backgroundColor: 'orange',
        marginLeft: '20%',
    },
    priceBox: {
        backgroundColor: '#17afbf',
        width: '10%',
        height:'10%',
        marginLeft: '45%',
        textAlign: 'center',
        borderRadius:3,
        position:'relative'
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