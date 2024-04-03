import React from 'react'
import style from "./section1.module.css";
import Title from "../../assets/title.svg";

const Section1 = () => {
  return (
    <div className={style.section}>
        <img src={Title} className={style.title} alt="" />
        <button className={style.btn}>В каталог</button>
    </div>
  )
}

export  {Section1}
