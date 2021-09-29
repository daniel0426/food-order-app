import React, { useContext } from 'react'
import styles from './cart.module.css';
import CartItem from './cartItem';
import Modal from '../UI/modal';
import CartContext from '../../store/cart-context';

const Cart= (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    
    const removeCartItem = (id)=> {
        cartCtx.removeItem(id)
    }
    const addCartItem = (item)=> {
        cartCtx.addItem({...item, amount:1})
    }

    const cartItems= (
    <ul className={styles['cart-items']}>
        {cartCtx.items.map(item => (
            <CartItem 
                key={item.id} 
                item={item}  
                onRemove={removeCartItem.bind(null, item.id)} 
                onAdd={addCartItem.bind(null, item)}
            />
        ))}
    </ul>
    )

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles.closeBtn} onClick={props.onHideCart}>Close</button>
                { cartCtx.items.length >0 &&
                <button className={styles.orderBtn}>Order</button>
                }
            </div>
        </Modal>
    )
}

export default Cart
