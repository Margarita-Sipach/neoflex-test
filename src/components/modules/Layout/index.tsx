import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import cls from './style.module.scss'

export const Layout = () => <>
    <Header/>
    <Outlet/>
</>