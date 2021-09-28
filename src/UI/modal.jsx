import React from 'react'
import styles from './modal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onHideCart}>

    </div>
   
}

const ModalOverlay =(props)=> {
    return <div className={styles.modal}>
        <div className={styles.content}>
            {props.children}
        </div>
    </div>
}

const portalLocation = document.getElementById('overlay');

const Modal= (props)=> { 
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart}/>, portalLocation )}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalLocation)}
        </>
    )
}

export default Modal
