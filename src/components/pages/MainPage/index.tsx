import { cards } from '../../../data'
import { Card } from '../../modules/Card'
import cls from './style.module.scss'

export const MainPage = () => <main className={cls.page}>{cards.map(card => <Card {...card}/>)}</main>