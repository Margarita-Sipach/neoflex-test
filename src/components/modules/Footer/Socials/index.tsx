import cls from './style.module.scss'
import classNames from 'classnames';
import { SlSocialVkontakte } from "react-icons/sl";
import { SocialIcon } from '../../../ui/SocialIcon';
import { RiTelegramLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { memo } from 'react';

export const Socials = memo(({className}: {className: string}) => {

    return <div className={classNames(cls.socials, className)}>
                <SocialIcon Icon={SlSocialVkontakte} path='https://vk.com/feed'/>
                <SocialIcon Icon={RiTelegramLine} path='https://web.telegram.org/a/'/>
                <SocialIcon Icon={FaWhatsapp} path='https://web.whatsapp.com/'/>
            </div>
})