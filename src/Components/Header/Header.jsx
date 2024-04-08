import React, { useEffect, useState } from 'react';
import style from "./header.module.css";

import Logo from "../../assets/logo.svg";

import { headerLinks } from "../information";

import Icon1 from "../../assets/icon1.svg";
import Icon2 from "../../assets/icon2.svg";
import Icon3 from "../../assets/icon3.svg";

const Header = () => {

  const [burger, setBurger] = useState(false);
  const [fixed, setFixed] = useState(false);

    window.addEventListener('scroll',() => {
        if(window.scrollY > 120){
            setFixed(true)
        }else{
            setFixed(false)
        }
    })

  return (
    <header className={fixed ? `${style.header} ${style.fixed}` : style.header}>
        <div className={style.left}>
            <div className={style.burger}>
                <div className={style.lines} onClick={() => {
                    setBurger(!burger)
                }}>
                    <div className={burger ? `${style.line} ${style.line1} ${style.line1Change}`: `${style.line} ${style.line1}`}></div>
                    <div className={burger ? `${style.line} ${style.line2} ${style.line2Change}`: `${style.line} ${style.line2}`}></div>
                    <div className={burger ? `${style.line} ${style.line3} ${style.line3Change}`: `${style.line} ${style.line3}`}></div>
                </div>
                <div className={burger ? `${style.dropdown} ${style.dropdownChange}` : style.dropdown}>
                    <ul className={style.burgerNav}>
                        {
                            headerLinks.map(item => (
                                <li key={item.id * Math.random()}>
                                    <a href={item.path} onClick={() => setBurger(false)}>{item.text}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <ul className={style.navigation}>
                {
                    headerLinks.map(item => (
                        <li key={item.id}>
                            <a href={item.path} className={style.link} onClick={() => setBurger(false)}>{item.text}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className={style.center}>
            <img src={Logo} className={style.logo} onClick={() => {
                window.scrollTo(0,0)
            }} alt="" />
        </div>
        <div className={style.right}>
            <ul className={style.rightNavigation}>
                <li>
                    <img src={Icon1} className={style.icon} alt="" />
                </li>
                <li>
                    <img src={Icon2} className={style.icon} alt="" />
                </li>
                <li>
                    <img src={Icon3} className={style.icon} alt="" />
                </li>
            </ul>
        </div>
    </header>
  )
}

export  {Header}
