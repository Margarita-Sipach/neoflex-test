import cls from './style.module.scss'
import classNames from 'classnames';
import { memo } from 'react';
import { GoGlobe } from "react-icons/go";

export const Langs = memo(({className}: {className: string}) => {
    return  <div className={classNames(cls.langs, className)}>
                <GoGlobe className={cls.icon}/>
                <button className={classNames(cls.lang, cls.active)}>Рус</button>
                <button className={cls.lang}>Eng</button>
            </div>
})