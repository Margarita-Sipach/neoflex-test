import { AmountIcon } from '../../ui/AmountIcon';
import { Logo } from '../../ui/Logo'
import cls from './style.module.scss'
import { BiHeart } from "react-icons/bi";
import { RiShoppingCart2Line } from "react-icons/ri";

export const Header = () => <header className={cls.header}>
    <Logo/>
    <div className={cls.icons}>
        <AmountIcon Icon={BiHeart} amount={10}/>
        <AmountIcon Icon={RiShoppingCart2Line} amount={1}/>
    </div>
</header>