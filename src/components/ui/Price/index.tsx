import classNames from 'classnames';
import cls from './style.module.scss'

export enum PriceTheme {
    primary = 'primary',
    secondary = 'secondary',
    dark = 'dark'
}

interface PriceProps{
    className?: string
    price: number
    oldPrice?: number
    theme: PriceTheme
}

export const Price = ({className, price, oldPrice, theme = PriceTheme.secondary}: PriceProps) => <div className={classNames(cls.wrapper, className)}>
    <span className={classNames(cls[theme], cls.price)}>{price} ₽</span>
    {oldPrice && <span className={cls.oldPrice}>{oldPrice} ₽</span>}
</div>