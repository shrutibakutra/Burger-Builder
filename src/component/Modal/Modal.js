import React  from 'react';


const Modal = (props) => {
    return (
        <div style={styles.Modal}>   
            {props.children}
        </div>
    )
}

export default Modal;

const styles = {
    Modal:{
        position: 'fixed',
        zIndex: 500,
        backgroundColor: 'white',
        width: '30%',
        border: '1px solid #ccc',
        boxShadow: '1px 1px 1px black',
        padding: '16px',
        left: '15%',
        top: '30%',
        height:'40%',
        marginLeft:'20%'
    
    }
}

