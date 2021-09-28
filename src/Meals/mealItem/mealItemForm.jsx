import React from 'react'
import styles from './mealItemForm.module.css'
import Input from '../../UI/input'

const MealItemForm = (props)=> {
    return (
        <form className={styles.form}>
            <Input label="Amount" 
                input={{
                  id :'amount_'+props.id, 
                  type: 'number',
                  min: '1', 
                  max:'5',
                  step:'1',
                  defaultValue: '1'
            }}/>
            <button className={styles.button}>+ ADD</button>
            
        </form>
    )
}

export default MealItemForm
