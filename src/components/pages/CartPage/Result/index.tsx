import classNames from 'classnames';
import cls from './style.module.scss'
import { Button, ButtonTheme } from '../../../ui/Button';
import { Price, PriceTheme } from '../../../ui/Price';
import { useState } from 'react';
import { BuyModal } from '../../../modules/BuyModal';

interface ResultProps{
    className?: string
    price: number
}

export const Result = ({className, price}: ResultProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return <div className={classNames('border', cls.result, className)}>
        <div className={cls.text}>
            <span>ИТОГО</span>
            <Price price={price} theme={PriceTheme.dark}></Price>
        </div>
        <Button onClick={() => setIsOpen(true)} theme={ButtonTheme.dark}>Перейти к оформлению</Button>
        <BuyModal setIsOpen={setIsOpen} isOpen={isOpen} price={price}/>
    </div>
}