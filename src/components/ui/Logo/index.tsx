import { Link } from "react-router-dom";
import { Routes } from "../../../lib/routes";
import cls from './style.module.scss'
import classNames from "classnames";

export const Logo = ({className}: {className?: string}) => <Link to={Routes.main} className={classNames(cls.logo, className)}>
    QPICK
</Link>