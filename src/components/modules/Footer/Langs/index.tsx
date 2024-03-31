import cls from './style.module.scss'
import classNames from 'classnames';
import { GoGlobe } from "react-icons/go";

export const Langs = ({className}: {className: string}) => <div className={classNames(cls.langs, className)}>
    <GoGlobe className={cls.icon}/>
    <button className={classNames(cls.lang, cls.active)}>Рус</button>
    <button className={cls.lang}>Eng</button>
</div>