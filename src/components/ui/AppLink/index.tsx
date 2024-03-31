import { Link } from "react-router-dom";
import { Routes } from "../../../lib/routes";
import cls from './style.module.scss'

interface AppLinkProps{
    path: Routes
    name: string
}

export const AppLink = ({path, name}: AppLinkProps) => <Link to={path} className={cls.link}>{name}</Link>