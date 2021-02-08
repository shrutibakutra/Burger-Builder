import React from 'react';
import Aux from '../../hoc/Aux';
import { Link } from 'react-router-dom';
import cart2 from '../../Images/Burgers/cart2.png'
import burgerIcon from '../../Images/Burgers/burgerIcon.png'

const Layout = (props) => (
    <Aux>
        <div style={styles.navbar}>
            <div style={styles.navs}>
                <img
                    src={burgerIcon}
                   
                    style={styles.burgerIcon}
                ></img>
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
        backgroundColor: 'brown'
    },
    navs: {
        // display: 'flex',
        // color: 'white',
        // justifyContent: 'space-between',
        // margin: '0 30px 0 30px',
        // fontWeight: 500
    },
    cart: {
        float: 'right',
        height: '1%',
        borderRadius: '30px',
        width: '3%',
        marginRight: '30px',
        marginTop: '2px',
        
    },
    burgerIcon:{
        float:'left',
        height: '7%',
        borderRadius: '30px',
        width: '4%',
        position:'absolute'
        // marginTop: '2px'
    }
}



export default Layout;