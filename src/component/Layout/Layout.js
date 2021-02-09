import React from 'react';
import Aux from '../../hoc/Aux';
import { Link } from 'react-router-dom';
import cart2 from '../../Images/Burgers/cart2.png'
import burgerIcon from '../../Images/Burgers/burgerIcon.png'

const Layout = (props) => (
    <Aux>
        <div style={styles.navbar}>
            <div style={styles.navs}>
            <Link to={'/'}>

                <img
                    src={burgerIcon}
                   
                    style={styles.burgerIcon}
                ></img>
                </Link>
                <a href='/'  style={styles.menu}> Home </a>
                <a style={styles.menu}>Order</a>
                <a href="/contactUs" style={styles.menu}>Locate Us</a>

                <Link to={'/cart'}>
                    <img
                        src={cart2}
                       
                        style={styles.cart}
                    ></img>
                </Link>
            </div>
        </div>
        <main style={styles.main}> {props.children}</main>
    </Aux>
)

const styles = {
    main: {
        // marginTop: '5%'
    },
    navbar: {
        width: '100%',
        height: '60px',
        backgroundColor: 'black',

    },
    navs: {
        width: '100%',
        display: 'flex',
        color: 'white',
        justifyContent: 'space-between',
        margin: '0 30px 0 30px',
        fontWeight: 500
    },
    cart: {
        float: 'right',
        height: '90%',
        borderRadius: '30px',
        width: '15%',
        marginRight: '40px',
        marginTop: '2.5%',
        
    },
    burgerIcon:{
        float:'left',
        height: '7%',
        borderRadius: '30px',
        width: '4%',
        position:'absolute'
        // marginTop: '2px'
    },
    menu:{
        marginTop:'1.5%',
        color:'orange'
    }
}



export default Layout;