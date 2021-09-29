import React, { useContext } from 'react'
import styles from './mealItem.module.css'
import MealItemForm from './mealItemForm'
import CartContext from '../../../store/cart-context'

const MealItem= ({meal})=> {
    const cartCtx = useContext(CartContext);

    const price = `$${meal.price.toFixed(2)}`

    const handleAddToCart = (amount)=> {
        const item = {
            id:meal.id,
            name: meal.name,
            price: meal.price,
            amount: amount,
        }
        cartCtx.addItem(item);
    }
    return (
     <li className={styles.meal}>
         <div>
             <h1 className={styles.name}>{meal.name}</h1>
             <div className={styles.description}>{meal.description}</div>
             <div className={styles.price}>{price}</div>
         </div>
         <div>
             <MealItemForm id={meal.id} onAddToCart={handleAddToCart} />
         </div>
     </li>
    ) 
}

export default MealItem
