import cls from './style.module.scss'
import { Logo } from '../../ui/Logo';
import { Nav } from './Nav';
import { Socials } from './Socials';

export const Footer = () => <footer className={cls.footer}>
    <Logo className={cls.logo}/>
    <Nav className={cls.nav}/>
    <Socials className={cls.socials}/>
</footer>