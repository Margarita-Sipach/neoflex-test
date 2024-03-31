import { Categories } from '../../../data'
import { Category } from '../../modules/Category'
import cls from './style.module.scss'

export const MainPage = () => <main className={cls.page}>
    <Category title='Наушники'></Category>
    <Category title='Беспроводные наушники' category={Categories.wireless}></Category>
</main>