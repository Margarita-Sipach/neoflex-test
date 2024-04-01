import classNames from 'classnames'
import { CardI } from '../../../data'
import { Button, ButtonTheme } from '../../ui/Button'
import { Price } from '../../ui/Price'
import { Star } from '../../ui/Star'
import cls from './style.module.scss'
import { Context } from '../../../App'
import React from 'react'
import { CartItemI } from '../../pages/CartPage/CartItem'

export const Card = ({id, img, name, star, price, oldPrice}: CardI) => {
    const {addCartItem, deleteCartItem, cartItems} = React.useContext(Context);

    const isCartItem = cartItems && cartItems.find((i: CartItemI) => i.id === id)

    return <div className={classNames('border', cls.card)}>
        <img src={img} alt="" className={cls.img} />
        <div className={cls.info}>
            <div className={cls.col}>
                <span className={cls.name}>{name}</span>
                <Star number={star}/>
            </div>
            <div className={cls.col}>
                <Price price={price} oldPrice={oldPrice}/>
                <Button 
                    theme={ButtonTheme.link}
                    onClick={isCartItem ? deleteCartItem(id) : addCartItem({id, img, name, price, amount: 1})}
                >
                    {isCartItem ? 'Убрать' : 'Купить'}
                </Button>
            </div>
        </div>
    </div>
}