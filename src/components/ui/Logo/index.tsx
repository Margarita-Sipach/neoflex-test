import { Link } from "react-router-dom";
import { Routes } from "../../../lib/routes";
import cls from './style.module.scss'

export const Logo = () => <Link to={Routes.main} className={cls.logo}>QPICK</Link>