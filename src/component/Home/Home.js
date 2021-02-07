import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import image4 from '../../Images/Burgers/burger4.jpg'
import image2 from '../../Images/Burgers/burger2.jpg'
import image3 from '../../Images/Burgers/burger3.jpg'
import { Link, withRouter } from 'react-router-dom';
import Aux from '../../hoc/Aux';



const PRICE = {
    shrutiSpecial: '5',
    chesseBurger: '7',
    spicyBaconBurger: '4.5'

}
const Home = (props) => {

    const addToCart = (e,key) => {
        props.history.push({
            pathname: '/cart',
            state: { name : e.target.name, price: PRICE[key]}
          })

    }

    return (
        <Aux>
            <div>
                <div style={styles.main}>
                    <p style={styles.headline}>
                        Why does cooking take like 6 hours and eating like 3 seconds and washing dishes like 7 days and 7 nights.
                     </p>
                    <p style={styles.headline}>Just order a burger</p>
                </div>
                <div style={{ width: '100%', height: '500px', backgroundColor: 'black' }}>

                    <div style={{ display: 'flex', paddingTop: '7%' }}>
                        <Carousel style={{ height: '30%', width: '30%', marginLeft: '5%' }}>
                            <Carousel.Item   >
                                <img
                                    className="d-block w-100"
                                    src={image4}
                                    alt="First slide"
                                />
                                <Carousel.Caption >
                                    <h2>Shruti Special Burger</h2>
                                    <button name="Shruti Special Burger" key='shrutiSpecial' onClick={(e,key='shrutiSpecial') => addToCart(e,key='shrutiSpecial')}>Add to cart</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={image2}
                                    alt="Third slide"

                                />
                                <Carousel.Caption>
                                    <h2>Cheese Burger</h2>
                                    <button name="Cheese Burger" onClick={(e,key) => addToCart(e,key='chesseBurger')}>Add to cart</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={image3}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h2>Spicy Bacon Burger</h2>
                                    <button name="Spicy Bacon Burger" onClick={(e,key) => addToCart(e,key='spicyBaconBurger')}>Add to cart</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        <Link to={'/prepareBurger'}>
                            <button style={styles.button1}>Create Your own Burger</button>
                        </Link>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default withRouter(Home);

const styles = {
    button1: {
        marginLeft: '20%',
        height: '10%',
        width: '200%',
        backgroundColor: 'orange',
        color: 'white',
        borderRadius: '15',
        marginTop: '50%'
    },
    headline: { fontFamily: 'Tahoma, sans-serif', fontWeight: 'bold', textAlign: 'center' },
    main: { width: '80%', height: '80px', paddingBottom: '5%', marginLeft: '5%' },
}