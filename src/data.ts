export enum Categories{
    wireless = 'wireless'
}

export interface CardI{
    id: number,
    img: string
    name: string
    star: number
    price: number
    oldPrice?: number
    category?: Categories
}

export const cards: CardI[] = [
    {
        id: 1,
        img: 'src/assets/cards/1.png',
        name: 'Apple BYZ S852I',
        star: 4.7,
        price: 2927,
        oldPrice: 3527
    },
    {
        id: 2,
        img: 'src/assets/cards/2.png',
        name: 'Apple EarPods',
        star: 4.5,
        price: 2327
    },
    {
        id: 3,
        img: 'src/assets/cards/3.png',
        name: 'Apple EarPods',
        star: 4.5,
        price: 2327
    },
    {
        id: 4,
        img: 'src/assets/cards/4.png',
        name: 'Apple AirPods',
        star: 4.7,
        price: 9527,
        category: Categories.wireless
    },
    {
        id: 5,
        img: 'src/assets/cards/5.png',
        name: 'GERLAX GH-04',
        star: 4.7,
        price: 6527,
        category: Categories.wireless
    },
    {
        id: 6,
        img: 'src/assets/cards/6.png',
        name: 'BOROFONE BO4',
        star: 4.7,
        price: 7527,
        category: Categories.wireless
    },
]