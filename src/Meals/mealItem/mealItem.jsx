import React from 'react'
import styles from './mealItem.module.css'
import MealItemForm from './mealItemForm'

const MealItem= ({meal})=> {
    const price = `$${meal.price.toFixed(2)}`
    return (
     <li className={styles.meal}>
         <div>
             <h1 className={styles.name}>{meal.name}</h1>
             <div className={styles.description}>{meal.description}</div>
             <div className={styles.price}>{price}</div>
         </div>
         <div>
             <MealItemForm id={meal.id}/>
         </div>
     </li>
    ) 
}

export default MealItem
