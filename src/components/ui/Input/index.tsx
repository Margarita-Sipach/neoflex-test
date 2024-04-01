import classNames from 'classnames';
import cls from './style.module.scss'
import { InputHTMLAttributes, memo } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string
}

export const Input = memo((props: InputProps) => {
    const {className, ...otherProps} = props;
    return <input className={classNames(cls.input, className)} {...otherProps} />
})