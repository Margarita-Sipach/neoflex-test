import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Routes } from './lib/routes';
import { MainPage } from './components/pages/MainPage';
import { CartPage } from './components/pages/CartPage';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { Layout } from './components/modules/Layout';
import React, { useEffect, useState } from 'react';
import { CartItemI } from './components/pages/CartPage/CartItem';
import { getCart, saveCart } from './lib/storage';

interface ContextI{
    cartItems: CartItemI[], 
    addCartItem: (item: CartItemI) => () => void,
    deleteCartItem: (id: number) => () => void,
    updateCartItemAmount: (id: number) => (amount: number) => void
}

const defaultValue: ContextI = {
    cartItems: [],
    addCartItem: (item: CartItemI) => () => console.log(item),
    deleteCartItem: (id: number) => () => console.log(id),
    updateCartItemAmount: (id: number) => (amount: number) => {console.log(id, amount)}
}
  
  export const Context = React.createContext(defaultValue);
  
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: Routes.main,
          element: <MainPage/>,
        },
        {
          path: Routes.cart,
          element: <CartPage/>,
        },
        {
          path: Routes.notFound,
          element: <NotFoundPage/>,
        }
      ],
    }
  ]);

export const App = () => {
    const [cartItems, setCartItems] = useState<CartItemI[]>(getCart())

    const addCartItem = (item: CartItemI) => {
        return () => setCartItems(prev => [...prev, item])
    }

    const deleteCartItem = (id: number) => {
        return () => setCartItems(prev => prev.filter(i => i.id !== id))
    }

    const updateCartItemAmount = (id: number) => {
        return (amount: number) => setCartItems(prev => prev.map(i => i.id === id ? {...i, amount} : i))
    }

    useEffect(() => {
      saveCart(cartItems)
    }, [cartItems])

    return <Context.Provider value={{
      cartItems, 
      addCartItem, 
      deleteCartItem, 
      updateCartItemAmount
    }}>
        <RouterProvider router={router} />
    </Context.Provider>
}