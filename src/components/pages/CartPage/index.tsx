import { useContext } from 'react'
import { CartItem } from './CartItem'
import { Result } from './Result'
import cls from './style.module.scss'
import { Context } from '../../../App'

export const CartPage = () => {
    const {cartItems} = useContext(Context);

    return <main className={cls.page}>
        <h2 className={cls.title}>Корзина</h2>
        <div className={cls.content}>
            <div className={cls.items}>{cartItems?.length ? cartItems.map(card => <CartItem key={card.id} {...card}/>) : "Пусто :("}</div>
            <Result price={cartItems.reduce((acc, i) => acc + i.amount * i.price, 0)} className={cls.result}></Result>
        </div>
    </main>
}