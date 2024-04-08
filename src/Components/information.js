import Product1 from "../assets/product1.png"
import Product2 from "../assets/product2.png"
import Product3 from "../assets/product3.png"
import Product4 from "../assets/product4.png"
import Product5 from "../assets/product5.png"
import Product6 from "../assets/product6.png"
import Product7 from "../assets/product7.png"
import Product8 from "../assets/product8.png"
import Product9 from "../assets/product9.png"

// header links

export const headerLinks = [
    {
        id: Math.random() * Math.random(),
        text: 'Каталог',
        path: '#katalog',
    },
    {
        id: Math.random() * Math.random(),
        text: 'LOOKBOOK',
        path: '#lookbook',
    },
    {
        id: Math.random() * Math.random(),
        text: 'О бренде',
        path: '#brende',    
    },
    {
        id: Math.random() * Math.random(),
        text: 'информация',
        path: '#information',
    }
]

// clothes products

export const clothes = [
    {
        id: Math.random() * Math.random(),
        img: Product1,
        title: 'Бомбер',
        price: '5 000 ₽',
        oldPrice: '',
    },
    {
        id: Math.random() * Math.random(),
        img: Product2,
        title: 'Кожаная куртка',
        price: '12 000 ₽',
        oldPrice: '',
    },
    {
        id: Math.random() * Math.random(),
        img: Product3,
        title: 'Тренч',
        price: '4 000 ₽',
        oldPrice: '',
    },
    {
        id: Math.random() * Math.random(),
        img: Product4,
        title: 'Рубашка',
        price: '4500 ₽ ',
        oldPrice: '5 000 ₽',
    },
    {
        id: Math.random() * Math.random(),
        img: Product5,
        title: 'Платье',
        price: '8 000 ₽',
        oldPrice: '',
    },
    {
        id: Math.random() * Math.random(),
        img: Product6,
        title: 'Домашний комплект',
        price: '4500 ₽',
        oldPrice: '5 000 ₽',
    },
    {
        id: Math.random() * Math.random(),
        img: Product7,
        title: 'Базовая водолазка',
        price: '3 000 ₽',
        oldPrice: '',
    },
    {
        id: Math.random() * Math.random(),
        img: Product8,
        title: 'Базовая футболка',
        price: '2 000 ₽',
        oldPrice: '',
    },
    {
        id: Math.random() * Math.random(),
        img: Product9,
        title: 'Классические брюки',
        price: '5 000 ₽',
        oldPrice: '',
    },
]

export const clothesSizes = [
    {
        id: Math.random() * Math.random(),
        size: 40,
    },
    {
        id: Math.random() * Math.random(),
        size: 42,
    },
    {
        id: Math.random() * Math.random(),
        size: 44,
    },
    {
        id: Math.random() * Math.random(),
        size: 46,
    },
    {
        id: Math.random() * Math.random(),
        size: 48,
    },
]