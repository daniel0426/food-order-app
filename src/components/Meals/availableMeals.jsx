import React, { useEffect, useState } from 'react'
import styles from './availableMeals.module.css'
import MealItem from './mealItem/mealItem';
import Card from '../UI/card';


const AvailableMeals= props => {
    const [meals, setMeals]= useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [httpError, setHttpError] = useState();

    useEffect( ()=> {
        const fetchMeals = async ()=> {
          const response = await fetch('https://food-order-app-59a7e-default-rtdb.firebaseio.com/meals.json')
          if(!response.ok){
            throw new Error('Somehing went wrong')
          }
          const responseData = await response.json();

          const loadedMeals = [];
          for(const key in responseData){
            loadedMeals.push({
              id: key,
              name: responseData[key].name,
              description: responseData[key].description,
              price : responseData[key].price
            })
          }
          setMeals(loadedMeals)
          setIsLoading(false)
        } 
       
           fetchMeals().catch(error => {
            setIsLoading(false)
            setHttpError(error.message)
           })
      
    }, []) 

    if(isLoading) {
      return <section className={styles.mealsLoading}>
       <p>Meals are loading ...</p>
      </section>
    }

    if(httpError){
      return <section className={styles.mealsError}>
        <p>{httpError}</p>
      </section>
    }
    const mealsList = meals.map(meal => 
    <MealItem id={meal.id} key={meal.id} meal={meal}/>)
    return (
        <section className={styles.meals}>
        <Card>
            <ul >
              {mealsList} 
            </ul>
        </Card>
        </section>
    )
}

export default AvailableMeals
