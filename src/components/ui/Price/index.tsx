import classNames from 'classnames';
import cls from './style.module.scss'
import { memo } from 'react';

export enum PriceTheme {
    primary = 'primary',
    secondary = 'secondary',
    dark = 'dark'
}

interface PriceProps{
    className?: string
    price: number
    oldPrice?: number
    theme?: PriceTheme
}

export const Price = memo((props: PriceProps) => {
    const {className, price, oldPrice, theme = PriceTheme.secondary} = props

    return  <div className={classNames(cls.wrapper, className)}>
                <span className={classNames(cls[theme], cls.price)}>
                    {price} ₽
                </span>
                {oldPrice && <span className={cls.oldPrice}>
                    {oldPrice} ₽
                </span>}
            </div>
})