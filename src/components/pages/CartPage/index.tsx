import { CardI } from '../../../data'
import { CartItem } from './CartItem'
import { Result } from './Result'
import cls from './style.module.scss'

export const CartPage = ({cards}: {cards: CardI[]}) => <main className={cls.page}>
    <h2 className={cls.title}>Корзина</h2>
    <div className={cls.content}>
        <div className={cls.items}>{cards?.length ? cards.map(card => <CartItem {...card}/>) : "Пусто :("}</div>
        <Result price={1000} className={cls.result}></Result>
    </div>
</main>