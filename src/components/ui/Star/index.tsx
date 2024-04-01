import classNames from 'classnames';
import cls from './style.module.scss'
import { IoIosStar } from "react-icons/io";
import { memo } from 'react';

interface StarProps{
    className?: string
    number: number
}

export const Star = memo((props: StarProps) => {
    const {className, number} = props;
    
    return <div className={classNames(cls.star, className)}>
        <IoIosStar className={cls.icon}/>
        <span className={cls.number}>{number}</span>
    </div>
})