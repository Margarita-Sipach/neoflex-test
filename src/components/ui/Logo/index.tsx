import { Link } from "react-router-dom";
import { Routes } from "../../../lib/routes";
import cls from './style.module.scss'
import classNames from "classnames";
import { memo } from "react";

export const Logo = memo(({className}: {className?: string}) => {
    return <Link to={Routes.main} 
                 className={classNames(cls.logo, className)}
            >
                QPICK
            </Link>
})