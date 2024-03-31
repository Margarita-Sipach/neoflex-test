import classNames from 'classnames';
import cls from './style.module.scss'
import { Categories, cards } from '../../../data';
import { Card } from '../Card';

interface CategoryProps{
    className?: string
    title: string
    category?: Categories
}

export const Category = ({className, title, category}: CategoryProps) => <section className={classNames(cls.category, className)}>
    <h2 className={cls.title}>{title}</h2>
    <div className={cls.cards}>
        {(category ? cards.filter((card) => card.category === category) : cards).map(card => <Card {...card} />)}
    </div>
</section>