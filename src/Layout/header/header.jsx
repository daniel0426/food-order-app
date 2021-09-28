import React from 'react';
import styles from './header.module.css'
import HeaderCartBtn from './headerCartBtn';
import mealsImage from '../../assets/meals.jpeg'

const Header = (props) => {
    return (
        <>
        <header className={styles.header}>
            <h1 className={styles.title}>ReactMeals</h1>
            <HeaderCartBtn onShowCart={props.onShowCart} />
        </header>
        <div className={styles.mainImg}>
            <img src={mealsImage} alt=""/>
        </div>
        </>
    );
};





export default Header;
