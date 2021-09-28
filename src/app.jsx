import {useState} from 'react';

import Header from './Layout/header/header'
import Meals from './Meals/meals'
import Cart from './Cart/cart';

function App() {

  const [cartVisible, setCartVisible]= useState(false)
  const showCart = ()=> {
    setCartVisible(true)
  }
  const hideCart = ()=> {
    setCartVisible(false)
  }
  return (
    <>
      {cartVisible && <Cart onHideCart = {hideCart}/>}
      <Header onShowCart ={showCart} /> 
      <main>
        <Meals/>
      </main>
    </>
  );
}

export default App;
