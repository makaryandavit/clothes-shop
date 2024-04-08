import React, { useEffect, useRef, useState } from 'react'
import style from "./section3.module.css";
import { clothes, clothesSizes } from '../information';
import { Basket } from '../../MiniComponents/Basket';

const Section3 = () => {
     const [products, setProducts] = useState([]);


  return (
    <div className={style.section} id='katalog'>
      <p className={style.title}>КАТАЛОГ</p>
      <div className={style.products}>
            {
                clothes.map(item => (
                    <div className={style.product} key={item.id}>
                        <div className={style.boxTop}>
                            <img src={item.img} className={style.img} alt="" />
                            <div className={style.bottomLine}>
                                <ul className={style.sizes}>
                                    {
                                        clothesSizes.map((chap,index) => (
                                            <li key={chap.id} className={style.size} onClick={(e) => {
                                               clothesSizes.forEach(item => {
                                                delete item.active
                                               })
                                               chap.active = 'acitve';
                                               if(chap.active){
                                                e.target.classList.toggle(style.active) 
                                               }
                                            }}>{chap.size}</li>
                                        ))
                                    }
                                </ul>
                                <p className={style.korzina} onClick={() => {
                                    setProducts([...products,item])
                                    window.location.reload()
                                }}>Добавить в корзину</p>
                            </div>
                        </div>
                        <div className={style.boxBottom}>
                            <p className={style.productTitle}>{item.title}</p>
                            <p className={style.price}>{item.price} <span className={style.oldPrice}>{item.oldPrice}</span></p>
                        </div>
                    </div>
                ))
            }
      </div>
    </div>
  )
}

export  {Section3}
