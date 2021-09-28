import React from 'react'
import styles from './meals.module.css'
import MealsSummary from './mealsSummary'
import AvailableMeals from './availableMeals'

const Meals = ()=> {
    return (
       <>
        <MealsSummary/>
        <AvailableMeals/>
       </>
    )
}

export default Meals
