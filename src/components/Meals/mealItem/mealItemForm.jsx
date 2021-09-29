import React, { useRef, useState } from 'react'
import styles from './mealItemForm.module.css'
import Input from '../../UI/input'

const MealItemForm = (props)=> {
    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountRef = useRef()
    const handleSubmit = (e)=>  {
        e.preventDefault();
        const enteredAmount = amountRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        
        if(enteredAmount.trim().length === 0 ||  
            enteredAmountNumber < 1 || 
            enteredAmountNumber > 5
        ){
            setAmountIsValid(false)
           return;
        }
        props.onAddToCart(enteredAmountNumber)
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input 
                ref={amountRef}
                label="Amount" 
                input={{
                  id :'amount_'+props.id, 
                  type: 'number',
                  min: '1', 
                  max:'5',
                  step:'1',
                  defaultValue: '1'
            }}/>
            <button type="submit" className={styles.button}>+ ADD</button>
            {!amountIsValid && <p>Please enter a valid amount (1 to 5)</p>}
        </form>
    )
}

export default MealItemForm
