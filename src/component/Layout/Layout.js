import React from 'react';
import Aux from '../../hoc/Aux';

const Layout = (props) => (
    <Aux>
        <div> toolbar, sidebar</div>
        <main style={styles.main}> {props.children}</main>     
    </Aux>
)

const styles = {
    main:{
        marginTop:16
    }
}



export default Layout;