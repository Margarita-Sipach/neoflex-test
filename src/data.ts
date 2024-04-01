export enum Categories{
    wireless = 'wireless'
}

export interface CardI{
    id: number,
    img: string
    name: string
    description: string
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
        description: 'Наушники AirPods можно объединять в пару с устройствами Apple для прослушивания музыки, фильмов, сообщений и другого контента. После настройки AirPods на одном устройстве Apple (например, на iPhone) наушники AirPods будут автоматически подключаться ко всем устройствам Apple, на которых выполнен вход с тем же Apple ID.',
        star: 4.7,
        price: 2927,
        oldPrice: 3527
    },
    {
        id: 2,
        img: 'src/assets/cards/2.png',
        name: 'Apple EarPods',
        description: 'Наушники AirPods можно объединять в пару с устройствами Apple для прослушивания музыки, фильмов, сообщений и другого контента. После настройки AirPods на одном устройстве Apple (например, на iPhone) наушники AirPods будут автоматически подключаться ко всем устройствам Apple, на которых выполнен вход с тем же Apple ID.',
        star: 4.5,
        price: 2327
    },
    {
        id: 3,
        img: 'src/assets/cards/3.png',
        name: 'Apple EarPods',
        description: 'Наушники AirPods можно объединять в пару с устройствами Apple для прослушивания музыки, фильмов, сообщений и другого контента. После настройки AirPods на одном устройстве Apple (например, на iPhone) наушники AirPods будут автоматически подключаться ко всем устройствам Apple, на которых выполнен вход с тем же Apple ID.',
        star: 4.5,
        price: 2327
    },
    {
        id: 4,
        img: 'src/assets/cards/4.png',
        name: 'Apple AirPods',
        description: 'Наушники AirPods можно объединять в пару с устройствами Apple для прослушивания музыки, фильмов, сообщений и другого контента. После настройки AirPods на одном устройстве Apple (например, на iPhone) наушники AirPods будут автоматически подключаться ко всем устройствам Apple, на которых выполнен вход с тем же Apple ID.',
        star: 4.7,
        price: 9527,
        category: Categories.wireless
    },
    {
        id: 5,
        img: 'src/assets/cards/5.png',
        name: 'GERLAX GH-04',
        description: 'Наушники AirPods можно объединять в пару с устройствами Apple для прослушивания музыки, фильмов, сообщений и другого контента. После настройки AirPods на одном устройстве Apple (например, на iPhone) наушники AirPods будут автоматически подключаться ко всем устройствам Apple, на которых выполнен вход с тем же Apple ID.',
        star: 4.7,
        price: 6527,
        category: Categories.wireless
    },
    {
        id: 6,
        img: 'src/assets/cards/6.png',
        name: 'BOROFONE BO4',
        description: 'Наушники AirPods можно объединять в пару с устройствами Apple для прослушивания музыки, фильмов, сообщений и другого контента. После настройки AirPods на одном устройстве Apple (например, на iPhone) наушники AirPods будут автоматически подключаться ко всем устройствам Apple, на которых выполнен вход с тем же Apple ID.',
        star: 4.7,
        price: 7527,
        category: Categories.wireless
    },
]