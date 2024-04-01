import { IconType } from 'react-icons'
import cls from './style.module.scss'
import { Link } from 'react-router-dom'
import { Routes } from '../../../lib/routes'

interface AmountIconProps {
    Icon: IconType, 
    amount: number,
    path?: Routes
}

export const AmountIcon = ({Icon, amount, path = Routes.main}: AmountIconProps) => {
    return <Link to={path} className={cls.wrapper}>
        {<Icon className={cls.icon}/>}
        <span className={cls.amount}>{amount}</span>
    </Link>
}