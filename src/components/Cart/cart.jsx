import React, { useContext, useState } from 'react'
import styles from './cart.module.css';
import CartItem from './cartItem';
import Modal from '../UI/modal';
import CartContext from '../../store/cart-context';
import Checkout from './checkout';


const Cart= (props) => {
    const [isCheckout, setIsCheckout] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [finishSubmit, setFinishSubmit] = useState(false)
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    
    const removeCartItem = (id)=> {
        cartCtx.removeItem(id)
    }
    const addCartItem = (item)=> {
        cartCtx.addItem({...item, amount:1})
    }
    const orderHandler = ()=> {
        setIsCheckout(true)
    }

    const submitOrderhandler = async (userData)=> {
        setIsSubmitting(true)
       await fetch('https://food-order-app-59a7e-default-rtdb.firebaseio.com/order.json', {
            method: "POST",
            body: JSON.stringify({
                user: userData,
                orderedItems:cartCtx.items
            }),

        })
        setIsSubmitting(false)
        setFinishSubmit(true)
        cartCtx.clearCart()
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

    const modalActions =  <div className={styles.actions}>
            <button className={styles.closeBtn} onClick={props.onHideCart}>Close</button>
            { cartCtx.items.length >0 &&
            <button className={styles.orderBtn} onClick={orderHandler}>Order</button>
            }
            </div>

    const cartModalContent = <>
            {cartItems}
            <div className={styles.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onCancel = {props.onHideCart} onConfirm={submitOrderhandler}/> }
            {!isCheckout && modalActions}
    </>

        const isSubmittingModalContent = <p>Sending order data...</p>
        const finishSubmitModalContent = <>
        <p className={styles.finishSubmit}>Successfully sent the order!  </p>
        <div className={styles.actions}>
            <button className={styles.closeBtn} onClick={props.onHideCart}>Close</button>
            
            </div>
        </>

    return (
        <Modal onHideCart={props.onHideCart}>
            {!isSubmitting && !finishSubmit &&  cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting &&  finishSubmit && finishSubmitModalContent}
        </Modal>
    )
}

export default Cart;
