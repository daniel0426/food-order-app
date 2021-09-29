import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultState = {
    items: [],
    totalAmount : 0,

}
const cartReducer = (state, action)=> {
    if(action.type==="ADD"){
         const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
         const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
         const existingItem = state.items[existingItemIndex]
         let updatedItems
         if(existingItem){
            const updatedItem = {
                ...existingItem,
                amount : existingItem.amount + action.item.amount
            }
            updatedItems = [...state.items ];
            updatedItems[existingItemIndex] = updatedItem
         }else {
            updatedItems = state.items.concat(action.item)

         }
         return {
              items: updatedItems,
              totalAmount : updatedTotalAmount
         }
    }else if(action.type==='REMOVE'){
        const existingItemIndex = state.items.findIndex(item => item.id === action.id)
        const existingItem = state.items[existingItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;

        if(existingItem.amount === 1){
           updatedItems = state.items.filter(item => item.id !== action.id)
        }else {
            const updatedItem = {...existingItem, 
                amount: existingItem.amount -1  }
                updatedItems = [...state.items]
                updatedItems[existingItemIndex] = updatedItem
        }
        return {
            items: updatedItems, 
            totalAmount: updatedTotalAmount
        }
    }
    return defaultState;

}

const CartProvider = props => {
    const [cartState, dispatch] = useReducer(cartReducer, defaultState)
    
    const addItemToCart = (item)=> {
        dispatch({type:'ADD', item: item})
    }

    const removeItemFromCart = (id)=> {
        dispatch({type:'REMOVE', id:id})
    }

    const cartContext = {
        items : cartState.items,
        totalAmount : cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    }

    return <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
}

export default CartProvider;
