import classNames from 'classnames';
import cls from './style.module.scss'
import { Button, ButtonTheme } from '../../../ui/Button';
import { Price, PriceTheme } from '../../../ui/Price';

interface ResultProps{
    className?: string
    price: number
}

export const Result = ({className, price}: ResultProps) => <div className={classNames('border', cls.result, className)}>
    <div className={cls.text}>
        <span>ИТОГО</span>
        <Price price={price} theme={PriceTheme.dark}></Price>
    </div>
    <Button theme={ButtonTheme.dark}>Перейти к оформлению</Button>
</div>