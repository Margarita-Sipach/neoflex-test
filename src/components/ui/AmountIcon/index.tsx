import { IconType } from 'react-icons'
import cls from './style.module.scss'

interface AmountIconProps {
    Icon: IconType, 
    amount: number
}

export const AmountIcon = ({Icon, amount}: AmountIconProps) => {
    return <div className={cls.wrapper}>
        {<Icon className={cls.icon}/>}
        <span className={cls.amount}>{amount}</span>
    </div>
}