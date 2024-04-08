import React from 'react'
import style from "./section4.module.css";

const Section4 = () => {
  return (
    <div className={style.section} id='lookbook'>
        <div className={`${style.parts} ${style.part1}`}></div>
        <div className={`${style.parts} ${style.part2}`}>
            <p className={style.text1}>LOOKBOOK</p>
            <p className={style.text2}>При создании коллекций мы учитываем, чтобы все изделия сочетались. Это позволяет подобрать полный образ на все случаи жизни</p>
            <p className={style.text3}>Скидка 10% при покупке полного образа</p>
            <button className={style.btn}>Смотреть</button>
        </div>
    </div>
  )
}

export  {Section4}
