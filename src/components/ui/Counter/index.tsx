import classNames from 'classnames';
import cls from './style.module.scss'

interface CounterProps{
    className?: string
    number: number
    setAmount: (amount: number) => void
}

export const Counter = ({className, number, setAmount}: CounterProps) => <div className={classNames(cls.counter, className)}>
    <button className={cls.button} onClick={() => setAmount(number && number - 1)}>−</button>
    <span className={cls.number}>{number}</span>
    <button className={cls.button} onClick={() => setAmount(number + 1)}>+</button>
</div>