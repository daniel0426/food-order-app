import {useState} from 'react';

import Header from './components/Layout/header/header'
import Meals from './components/Meals/meals'
import Cart from './components/Cart/cart';
import CartProvider from './store/cartProvider';

function App() {

  const [cartVisible, setCartVisible]= useState(false)
  const showCart = ()=> {
    setCartVisible(true)
  }
  const hideCart = ()=> {
    setCartVisible(false)
  }
  return (
    <CartProvider>
      {cartVisible && <Cart onHideCart = {hideCart} />}
      <Header onShowCart ={showCart} /> 
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
