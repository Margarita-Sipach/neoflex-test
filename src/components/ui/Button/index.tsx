import classNames from 'classnames';
import cls from './style.module.scss'
import { ButtonHTMLAttributes } from 'react';

export enum ButtonTheme{
    link = 'link',
    dark = 'dark'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme: ButtonTheme
    children: string
}

export const Button = ({className, theme, children, ...otherProps}: ButtonProps) => <button className={classNames(cls[theme], className)} {...otherProps}>{children}</button>