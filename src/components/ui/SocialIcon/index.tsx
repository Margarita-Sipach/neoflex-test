import { IconType } from 'react-icons'
import cls from './style.module.scss'
import { memo } from 'react';

interface SocialIconProps {
    Icon: IconType;
    path: string
}

export const SocialIcon = memo((props: SocialIconProps) => {
    const {Icon, path} = props;
    
    return <a href={path}>
        <Icon className={cls.link}/>
    </a>
})