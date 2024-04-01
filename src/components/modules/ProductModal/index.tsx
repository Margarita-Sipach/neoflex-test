import classNames from 'classnames';
import cls from './style.module.scss'
import { CardI } from '../../../data';
import { Modal } from '../../ui/Modal';
import { Star } from '../../ui/Star';
import { Price } from '../../ui/Price';

interface ProductModalProps{
    className?: string
    isOpen: boolean
    setIsOpen: any
}

export const ProductModal = ({className, img, name, price, star, category, description, oldPrice, isOpen, setIsOpen}: ProductModalProps & CardI) => <Modal isOpen={isOpen} setIsOpen={setIsOpen} className={classNames(cls.wrapper, className)}>
    <img src={img} alt="" />
    <h2 className={cls.title}>{name}</h2>
    <p className={cls.text}>{description}</p>
    <Star number={star}></Star>
    <Price price={price} oldPrice={oldPrice}/>
    {category && <span>Категория: {category}</span>}
</Modal>