import classNames from 'classnames';
import cls from './style.module.scss'

interface CounterProps{
    className?: string
    number: number
}

export const Counter = ({className, number}: CounterProps) => <div className={classNames(cls.counter, className)}>
    <button className={cls.button}>−</button>
    <span className={cls.number}>{number}</span>
    <button className={cls.button}>+</button>
</div>