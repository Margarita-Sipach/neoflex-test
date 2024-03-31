import { IconType } from 'react-icons'
import cls from './style.module.scss'

interface SocialIconProps {
    Icon: IconType;
    path: string
}

export const SocialIcon = ({Icon, path}: SocialIconProps) => {
    return <a href={path}><Icon className={cls.link}/></a>
}