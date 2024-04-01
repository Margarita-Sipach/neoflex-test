import { CartItemI } from "../components/pages/CartPage/CartItem"

const CART_KEY = 'cart'

export const saveCart = (items: CartItemI[]) => {
    localStorage.setItem(CART_KEY, JSON.stringify(items))
}

export const getCart = () => {
    const items = localStorage.getItem(CART_KEY)
    return items ? JSON.parse(items) : []
}