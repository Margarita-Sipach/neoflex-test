import cls from './style.module.scss'
import classNames from 'classnames';
import { AppLink } from '../../../ui/AppLink';
import { Routes } from '../../../../lib/routes';
import { Langs } from '../Langs';

export const Nav = ({className}: {className: string}) => <nav className={classNames(cls.nav, className)}>
    <div className={cls.col}>
        <AppLink name='Избранное' path={Routes.notFound}/>
        <AppLink name='Корзина' path={Routes.notFound}/>
        <AppLink name='Контакты' path={Routes.notFound}/>
    </div>
    <div className={cls.col}>
        <AppLink name='Условия сервиса' path={Routes.notFound}/>
        <Langs className={cls.langs}/>
    </div>
</nav>