import classNames from 'classnames';
import cls from './style.module.scss'
import { IoIosStar } from "react-icons/io";

interface StarProps{
    className?: string
    number: number
}

export const Star = ({className, number}: StarProps) => <div className={classNames(cls.star, className)}>
    <IoIosStar className={cls.icon}/>
    <span className={cls.number}>{number}</span>
</div>