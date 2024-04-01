import React from 'react';
import { Context } from '../../../App';
import { AmountIcon } from '../../ui/AmountIcon';
import { Logo } from '../../ui/Logo'
import cls from './style.module.scss'
import { BiHeart } from "react-icons/bi";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Routes } from '../../../lib/routes';

export const Header = () => {
    const {cartItems} = React.useContext(Context);

return <header className={cls.header}>
    <Logo/>
    <div className={cls.icons}>
        <AmountIcon Icon={BiHeart} amount={10}/>
        <AmountIcon path={Routes.cart} Icon={RiShoppingCart2Line} 
                    amount={cartItems.map(({amount}) => amount).reduce((a, i) => a + i, 0)}
        />
    </div>
</header>
}