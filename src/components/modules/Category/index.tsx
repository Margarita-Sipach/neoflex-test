import classNames from 'classnames';
import cls from './style.module.scss'
import { Categories, cards } from '../../../data';
import { Card } from '../Card';
import { memo } from 'react';

interface CategoryProps{
    className?: string
    title: string
    category?: Categories
}

export const Category = memo((props: CategoryProps) => {
    const {className, title, category} = props

    return <section className={classNames(cls.category, className)}>
        <h2 className={cls.title}>{title}</h2>
        <div className={cls.cards}>
            {(category 
                ? cards.filter((card) => card.category === category) 
                : cards).map(card => <Card {...card} />
            )}
        </div>
    </section>
})