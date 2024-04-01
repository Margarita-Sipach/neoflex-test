import cls from './style.module.scss'
import classNames from 'classnames';
import { AppLink } from '../../../ui/AppLink';
import { Langs } from '../Langs';
import { memo } from 'react';

export const Nav = memo(({className}: {className: string}) => {
    return <nav className={classNames(cls.nav, className)}>
        <div className={cls.col}>
            <AppLink name='Избранное'/>
            <AppLink name='Корзина'/>
            <AppLink name='Контакты'/>
        </div>
        <div className={cls.col}>
            <AppLink name='Условия сервиса'/>
            <Langs className={cls.langs}/>
        </div>
    </nav>
})