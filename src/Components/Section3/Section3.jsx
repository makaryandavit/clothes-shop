import React, { useEffect, useRef, useState } from 'react'
import style from "./section3.module.css";
import { clothes } from '../information';
import { Basket } from '../../MiniComponents/Basket';

const Section3 = () => {
     const [products, setProducts] = useState([]);
     


  return (
    <div className={style.section}>
      <p className={style.title}>КАТАЛОГ</p>
      <div className={style.products}>
            {
                clothes.map(item => (
                    <div className={style.product} key={item.id}>
                        <div className={style.boxTop}>
                            <img src={item.img} className={style.img} alt="" />
                            <div className={style.bottomLine}>
                                <ul className={style.sizes}>
                                    <li className={style.size}>40</li>
                                    <li className={style.size}>42</li>
                                    <li className={`${style.size} ${style.active}`}>44</li>
                                    <li className={style.size}>46</li>
                                    <li className={style.size}>48</li>
                                </ul>
                                <p className={style.korzina} onClick={() => {
                                    setProducts([...products,item])
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
      {/* <Basket /> */}
    </div>
  )
}

export  {Section3}
