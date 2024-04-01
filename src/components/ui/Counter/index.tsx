import classNames from 'classnames';
import cls from './style.module.scss'
import { memo } from 'react';

interface CounterProps{
    className?: string
    number: number
    setAmount: (amount: number) => void
}

export const Counter = memo((props: CounterProps) => {
    const {className, number, setAmount} = props;

    return <div className={classNames(cls.counter, className)}>
            <button className={cls.button} 
                    onClick={() => setAmount(number && number - 1)}
            >
                −
            </button>
            <span className={cls.number}>
                {number}
            </span>
            <button className={cls.button} 
                    onClick={() => setAmount(number + 1)}
            >
                +
            </button>
        </div>
})