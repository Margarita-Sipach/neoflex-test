import classNames from 'classnames';
import cls from './style.module.scss'
import { Counter } from '../../../ui/Counter';
import { Price, PriceTheme } from '../../../ui/Price';
import { memo, useContext } from 'react';
import { RiDeleteBin2Line } from "react-icons/ri";
import { Context } from '../../../../App';

export interface CartItemI{
    id: number,
    img: string,
    name: string,
    price: number,
    amount: number
}

interface CartItemProps{
    className?: string
}

export const CartItem = memo((props: CartItemProps & CartItemI) => {

    const {className, id, img, name, price, amount} = props
    const {updateCartItemAmount, deleteCartItem} = useContext(Context)

    return <div className={classNames('border', cls.item, className)}>
        <div className={classNames(cls.col, cls.center)}>
            <img src={img} alt="" />
            <Counter number={amount} setAmount={updateCartItemAmount(id)}></Counter>
        </div>
        <div className={cls.info}>
            <span className={cls.name}>{name}</span>
            <Price price={price} theme={PriceTheme.primary}/>
        </div>
        <div className={classNames(cls.col, cls.right)}>
            <button onClick={deleteCartItem(id)}><RiDeleteBin2Line className={cls.delete}/></button>
            <Price price={price*amount} theme={PriceTheme.dark}/>
        </div>
    </div>
})