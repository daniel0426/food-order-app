import React from 'react'
import styles from './cart.module.css';
import CartItem from './cartItem';
import Modal from '../UI/modal';

const Cart= (props) => {
const cartItems= <ul className={styles['cart-items']}>{[{id:'c1', name:"sushi", amount:'3', price:12.99}].map(item => <li>{item.name}</li>)}</ul>
    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Total amount</span>
                <span>$35.63</span>
            </div>
            <div className={styles.actions}>
                <button className={styles.closeBtn} onClick={props.onHideCart}>Close</button>
                <button className={styles.orderBtn}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart
