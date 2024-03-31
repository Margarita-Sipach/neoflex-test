import classNames from 'classnames';
import cls from './style.module.scss'

interface PriceProps{
    className?: string
    price: number
    oldPrice?: number
}

export const Price = ({className, price, oldPrice}: PriceProps) => <div className={classNames(cls.wrapper, className)}>
    <span className={cls.price}>{price} ₽</span>
    {oldPrice && <span className={cls.oldPrice}>{oldPrice} ₽</span>}
</div>