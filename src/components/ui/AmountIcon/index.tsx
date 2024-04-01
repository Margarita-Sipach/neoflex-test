import { IconType } from 'react-icons'
import cls from './style.module.scss'
import { Link } from 'react-router-dom'
import { Routes } from '../../../lib/routes'
import { memo } from 'react'

interface AmountIconProps {
    Icon: IconType, 
    amount: number,
    path?: Routes
}

export const AmountIcon = memo((props: AmountIconProps) => {
    const {Icon, amount, path = Routes.main} = props;

    return <Link to={path} className={cls.wrapper}>
        <Icon className={cls.icon}/>
        <span className={cls.amount}>
            {amount}
        </span>
    </Link>
})