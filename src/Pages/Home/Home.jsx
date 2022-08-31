import React, { useEffect, useState } from 'react'
import { Navbar } from '../../Navbar/Navbar'
import { Search } from '../../Search/Search';
import style from './Home.module.css'
export const Home = () => {
    const [navClass, setNav] = useState('navbar');


    useEffect(() => {
        document.addEventListener('scroll', function(e) {
if(window.scrollY === 0) {
    setNav('navbar')
} else {
    setNav('navbar2')
}
           });
    }, []);


  return (
    <div>
        <Navbar stylename={navClass}></Navbar>
    <div className={style.home}>
        <div className={style.homeimage}>
            <img src="/main-div.png" alt="poster" width="100%"/>
        </div>
    </div>
    <Search></Search>
    </div>
  )
}
