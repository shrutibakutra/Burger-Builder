import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image4 from '../../Images/Burgers/burger4.jpg'
import image2 from '../../Images/Burgers/burger2.jpg'
import image3 from '../../Images/Burgers/burger3.jpg'
import self from '../../Images/Burgers/self.png'
import Footer from '../Footer/Footer'

import { Link, withRouter } from 'react-router-dom';
import Aux from '../../hoc/Aux';

const PRICE = {
    shrutiSpecial: '5',
    chesseBurger: '7',
    spicyBaconBurger: '4.5'

}
const Home = (props) => {
    const [hover, setHover] = useState({shrutiSpecial:false,chesseBurger:false,spicyBaconBurger:false})

    const addToCart = (e, key) => {
        props.history.push({
            pathname: '/cart',
            state: { name: e.target.name, price: PRICE[key] }
        })

    }

    const hanleMouseOver = (burgerKey) => {    
        setHover({...hover,[burgerKey]:true})
    }

    const handleMouseOut = () => {
        setHover(false)

    }


    return (
        <Aux>
            <div>
                <div style={styles.main}>
                    <p style={styles.headline}>
                        Why does cooking take like 6 hours and eating like 3 seconds and washing dishes like 7 days and 7 nights.
                     </p>
                    <p style={styles.headline}>Just order a burger??</p>
                </div>

                <div style={{ width: '100%', height: '400px', backgroundColor: 'black' }}>
                        <div style={{marginLeft:'20%'  }}>
                                <img
                                    src={self}
                                    height={'30%'}
                                    width={'30%'}
                                    style={styles.self}
                                >
                                </img>

                        </div>
                        <Link to={'/prepareBurger'}>
                        <button style={styles.button1}>Create Your own Burger</button>
                        </Link>
                    </div>


                    <div style={{ justifyContent: 'space-between', display: 'flex', margin: 'auto', }}>
                    <div style={ hover.shrutiSpecial ? styles.images : styles.image}
                     onMouseEnter={(key) => hanleMouseOver(key='shrutiSpecial')}
                     onMouseLeave={(key) => handleMouseOut(key='shrutiSpecial')}>
                        <img
                            className="d-block w-100"
                            src={image4}
                            alt="First slide"
                            height={'40%'}
                            width={'10%'}

                        />
                        <p style={styles.names}>Shruti Special Burger</p>
                        <button style={styles.button} name="Shruti Special Burger" key='shrutiSpecial' onClick={(e, key = 'shrutiSpecial') => addToCart(e, key = 'shrutiSpecial')}>Add to cart</button>
                    </div>


                    <div style={ hover.chesseBurger ? styles.images : styles.image}
                        onMouseEnter={(key) => hanleMouseOver(key='chesseBurger')}
                        onMouseLeave={(key) => handleMouseOut(key='chesseBurger')}>

                        <img
                            className="d-block w-100"
                            src={image2}
                            alt="First slide"
                            height={'40%'}
                            width={'10%'}

                        />
                        <p style={styles.names}>Cheese Burger</p>
                        <button style={styles.button} name="Cheese Burger" onClick={(e, key) => addToCart(e, key = 'chesseBurger')}>Add to cart</button>


                    </div>
                    <div style={ hover.spicyBaconBurger ? styles.images : styles.image}
                         onMouseEnter={(key) => hanleMouseOver(key='spicyBaconBurger')}
                         onMouseLeave={(key) => handleMouseOut(key='spicyBaconBurger')}>
                        <img
                            className="d-block w-100"
                            src={image3}
                            alt="First slide"
                            height={'40%'}
                            width={'10%'}

                        />
                        <p style={styles.names}>Spicy Bacon Burger</p>
                        <button style={styles.button} name="Spicy Bacon Burger" onClick={(e, key) => addToCart(e, key = 'spicyBaconBurger')}>Add to cart</button>
                    </div>
                </div>
            </div>
            <Footer />
        </Aux>
    )
}

export default withRouter(Home);

const styles = {
    button1: {
        marginLeft: '41%',
        backgroundColor: '#bf4300',
        color: 'white',
        borderRadius: '5px',
        borderColor:'orange'
       
    },
    headline: { fontFamily: 'Tahoma, sans-serif', fontWeight: 'bold', textAlign: 'center',color:'grey' },
    main: { width: '80%', height: '80px', paddingBottom: '5%', marginLeft: '5%' },
  
    self: {
        marginLeft: '20%',
        marginTop:'10%',

    },
    images: {
        height: '10%',
        width: '20%',
        margin: '5% auto',
        boxShadow:'10px 5px 5px black' 
    //    ' -ms-transform': 'scale(1.5)', /* IE 9 */
    //     '-webkit-transform': 'scale(1.5)', /* Safari 3-8 */
    //     transform: 'scale(1.5)', 
    },
    image:{
        height: '10%',
        width: '20%',
        margin: '5% auto',

    },
    names: {
        fontSize: '15px',
        textAlign: 'center',
        color: 'orange'
    },
    button: {
        backgroundColor: 'grey',
        borderRadius: '5px',
        borderColor: 'grey',
        marginLeft: '30%'
    }



}