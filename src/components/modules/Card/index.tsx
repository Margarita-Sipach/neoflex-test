import { CardI } from '../../../data'
import { Button, ButtonTheme } from '../../ui/Button'
import { Price } from '../../ui/Price'
import { Star } from '../../ui/Star'
import cls from './style.module.scss'

export const Card = ({img, name, star, price, oldPrice}: CardI) => <div className={cls.card}>
    <img src={img} alt="" className={cls.img} />
    <div className={cls.info}>
        <div className={cls.col}>
            <span className={cls.name}>{name}</span>
            <Star number={star}/>
        </div>
        <div className={cls.col}>
            <Price price={price} oldPrice={oldPrice}/>
            <Button theme={ButtonTheme.link}>Купить</Button>
        </div>
    </div>
</div>