import React from 'react'
import style from "./section5.module.css";

import Photo1 from "../../assets/box1Back.png"
import Photo2 from "../../assets/box2Back.png"
import Photo3 from "../../assets/box3Back.png"
import Photo4 from "../../assets/box4Back.png"

const Section5 = () => {
  return (
    <div className={style.section} id='brende'>
        <p className={style.title}>НАШ ИНСТАГРАМ</p>
        <p className={style.instagram}>@loylen_brand</p>
        <div className={style.photos}>
            <div className={style.photoBox}>
                <img src={Photo1} className={style.photo} alt="" />
            </div>
            <div className={style.photoBox}>
                <img src={Photo2} className={style.photo} alt="" />
            </div>
            <div className={style.photoBox}>
                <img src={Photo3} className={style.photo} alt="" />
            </div>
            <div className={style.photoBox}>
                <img src={Photo4} className={style.photo} alt="" />
            </div>
        </div>
    </div>
  )
}

export  {Section5}
