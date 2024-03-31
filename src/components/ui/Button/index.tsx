import classNames from 'classnames';
import cls from './style.module.scss'

export enum ButtonTheme{
    link = 'link'
}

interface ButtonProps{
    className?: string
    theme: ButtonTheme
    children: string
}

export const Button = ({className, theme, children}: ButtonProps) => <button className={classNames(cls[theme], className)}>{children}</button>