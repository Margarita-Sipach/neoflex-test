import classNames from 'classnames';
import cls from './style.module.scss'
import { ButtonHTMLAttributes, memo } from 'react';

export enum ButtonTheme{
    link = 'link',
    dark = 'dark'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme: ButtonTheme
    children: string
}

export const Button = memo((props: ButtonProps) => {
    const {className, theme, children, ...otherProps} = props;
    return <button className={classNames(cls[theme], className)} {...otherProps}>
        {children}
    </button>
})