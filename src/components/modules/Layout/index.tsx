import { AmountIcon } from '../../ui/AmountIcon';
import { Logo } from '../../ui/Logo'
import cls from './style.module.scss'
import { BiHeart } from "react-icons/bi";
import { RiShoppingCart2Line } from "react-icons/ri";

export const Layout = () => <>
<AmountIcon Icon={BiHeart} amount={10}></AmountIcon>
<AmountIcon Icon={RiShoppingCart2Line} amount={1}></AmountIcon>
<Logo/></>