import React from 'react'
import style from './Navbar.module.css'
export const Navbar = ({stylename}) => {
  return (
<div className={`${style[stylename]}`}>
    <div className={style.navabarlogo}>
        <img src="./logowtf.png" alt="logo" height="100%"  />
    </div>
    <div className={style.navbarcontent}>
        <ul>
            <li>Fitness</li>
            <li>Nutrition</li>
            <li style={{
                borderBottom: '2.5px solid rgb(184, 11, 11)',
            }}>Gyms</li>
            <li>Become WTF Partner</li>
            <li>About Us</li>
            <li className={style.navbarbutton}>Login</li>
        </ul>
    </div>
</div>
  )
}
