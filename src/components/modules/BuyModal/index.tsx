import classNames from 'classnames';
import cls from './style.module.scss'
import { Input } from '../../ui/Input';
import { Modal } from '../../ui/Modal';
import { Button, ButtonTheme } from '../../ui/Button';
import { Price, PriceTheme } from '../../ui/Price';
import { memo } from 'react';

interface BuyModalProps{
    className?: string
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    price: number
}

export const BuyModal = memo((props: BuyModalProps) => {
    const {className, setIsOpen, isOpen, price} = props;
    return <Modal setIsOpen={setIsOpen} isOpen={isOpen} className={classNames(cls.modal, className)}>
        <Input placeholder='Полное имя'/>
        <Input placeholder='Email' type='email'/>
        <Input placeholder='Телефон' type='tel'/>
        <Input placeholder='Номер карты' type='number' max={16}/>
        <Input placeholder='Дата окончания действия карты' type='month'/>
        <Input placeholder='Секретный номер' type='number' max={3}/>
        <Price theme={PriceTheme.dark} price={price}/>
        <Button theme={ButtonTheme.dark}>Отправить</Button>
    </Modal>
})