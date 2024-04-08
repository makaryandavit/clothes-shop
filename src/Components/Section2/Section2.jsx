import React from 'react'
import style from "./section2.module.css";

const Section2 = () => {
  return (
    <div className={style.section} id='information'>
        <div className={`${style.box} ${style.box1}`}>
            <p className={style.title}>НОВИНКИ</p>
            <button className={style.btn}>СМОТРЕТЬ</button>
        </div>
        <div className={`${style.box} ${style.box2}`}>
            <p className={style.title}>РАСПРОДАЖА</p>
            <button className={style.btn}>СМОТРЕТЬ</button>
        </div>
    </div>
  )
}

export  {Section2}
