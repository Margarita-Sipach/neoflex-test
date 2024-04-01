import classNames from 'classnames';
import cls from './style.module.scss'
import { CardI } from '../../../data';
import { Modal } from '../../ui/Modal';
import { Star } from '../../ui/Star';
import { Price } from '../../ui/Price';
import { memo } from 'react';

interface ProductModalProps{
    className?: string
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

export const ProductModal = memo((props: ProductModalProps & CardI) => {
    const {
        className, 
        img, 
        name, 
        price, 
        star, 
        category, 
        description, 
        oldPrice, 
        isOpen, 
        setIsOpen
    } = props;
    
    return <Modal isOpen={isOpen} 
                  setIsOpen={setIsOpen} 
                  className={classNames(cls.wrapper, className)}
            >
                <img src={img} alt="" />
                <h2 className={cls.title}>{name}</h2>
                <p className={cls.text}>{description}</p>
                <Star number={star}/>
                <Price price={price} oldPrice={oldPrice}/>
                {category && <span>Категория: {category}</span>}
            </Modal>
})