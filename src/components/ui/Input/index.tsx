import classNames from 'classnames';
import cls from './style.module.scss'
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string
}

export const Input = ({className, ...otherProps}: InputProps) => <input className={classNames(cls.input, className)} {...otherProps} />