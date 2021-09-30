import React, { useRef, useState } from "react";
import styles from "./checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true,
    })
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormInputsValidity ({
        name: enteredNameIsValid,
        street: enteredStreetIsValid,
        postalCode : enteredPostalCodeIsValid,
        city: enteredCityIsValid,
    })
    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if(!formIsValid){
        return;
    }
    props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        postalCode : enteredPostalCode,
        city: enteredCity
    })
    //submit card data
  };
  const nameControlStyles = `${styles.control} ${formInputsValidity.name ?'' : styles.invalid}`
  const streetControlStyles = `${styles.control} ${formInputsValidity.street ?'' : styles.invalid}`
  const postalCodeControlStyles = `${styles.control} ${formInputsValidity.postalCode ?'' : styles.invalid}`
  const cityControlStyles = `${styles.control} ${formInputsValidity.city ?'' : styles.invalid}`


  return (
    <form onSubmit={confirmHandler} className={styles.form}>
      <div className={nameControlStyles}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!formInputsValidity.name && <p className={styles.errorText}>Please enter a valid name !</p> }
      </div>
      <div className={streetControlStyles}>
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} type="text" id="street" />
        {!formInputsValidity.street && <p className={styles.errorText}>Please enter a valid street !</p> }

      </div>
      <div className={postalCodeControlStyles}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalCodeInputRef} type="text" id="postal" />
        {!formInputsValidity.postalCode && <p className={styles.errorText}>Please enter a valid postal code !</p> }

      </div>
      <div className={cityControlStyles}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
        {!formInputsValidity.city && <p className={styles.errorText}>Please enter a valid city !</p> }

      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
