import classNames from 'classnames';
import cls from './style.module.scss'
import { CardI } from '../../../../data';
import { Counter } from '../../../ui/Counter';
import { Price, PriceTheme } from '../../../ui/Price';
import { useState } from 'react';
import { RiDeleteBin2Line } from "react-icons/ri";

interface CartItemProps{
    className?: string
}

export const CartItem = ({className, img, name, price}: CartItemProps & CardI) => {

    const [amount, setAmount] = useState(1)

return <div className={classNames('border', cls.item, className)}>
    <div className={classNames(cls.col, cls.center)}>
        <img src={img} alt="" />
        <Counter number={1}></Counter>
    </div>
    <div className={cls.info}>
        <span className={cls.name}>{name}</span>
        <Price price={price} theme={PriceTheme.primary}/>
    </div>
    <div className={classNames(cls.col, cls.right)}>
        <button><RiDeleteBin2Line className={cls.delete}/></button>
        <Price price={price*amount} theme={PriceTheme.dark}/>
    </div>
</div>
}