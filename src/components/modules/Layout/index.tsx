import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import cls from './style.module.scss'
import { Footer } from '../Footer';

export const Layout = () => <>
    <Header/>
    <Outlet/>
    <Footer></Footer>
</>