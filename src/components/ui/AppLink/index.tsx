import { Link } from "react-router-dom";
import { Routes } from "../../../lib/routes";
import cls from './style.module.scss'
import { memo } from "react";

interface AppLinkProps{
    path?: Routes
    name: string
}

export const AppLink = memo(({path = Routes.notFound, name}: AppLinkProps) => {
    return <Link to={path} 
                 className={cls.link}
            >
                {name}
            </Link>
})