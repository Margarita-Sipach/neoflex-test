import cls from './style.module.scss'
import { Logo } from '../../ui/Logo';
import { Nav } from './Nav';
import { Socials } from './Socials';
import classNames from 'classnames';
import { memo } from 'react';

export const Footer = memo(() => {
    return <footer className={classNames('shadow', cls.footer)}>
        <Logo className={cls.logo}/>
        <Nav className={cls.nav}/>
        <Socials className={cls.socials}/>
    </footer>
})