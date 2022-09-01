import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../../Navbar/Navbar";
import { Search } from "../../Search/Search";
import style from "./Home.module.css";
import { Gymmiddleware } from "../../Redux/Action/Gym";
import { Filter } from "../../Filter/Filter";
import { Gymui } from "../../Gymui/Gymui";
import { Footer } from "../Footer/Footer";
import { Wtffitness } from "../Wtffitness/Wtffitness";
export const Home = () => {
  const disptach = useDispatch();
  const data = useSelector((store) => store.Gymreducer.data.data);
  const [navClass, setNav] = useState("navbar");
  const [loading, setLoading] = useState(false);

  const [gymData, setGymdata] = useState([]);
const [inputcity, setCity] = useState('');

useEffect(() => {
    disptach(Gymmiddleware(inputcity));
}, [inputcity, setCity]);
console.log(inputcity);

  useEffect(() => {
    disptach(Gymmiddleware());
  }, []);


  useEffect(() => {
    document.addEventListener("scroll", function (e) {
      if (window.scrollY === 0) {
        setNav("navbar");
      } else {
        setNav("navbar2");
      }
    });
  }, []);

  useEffect( () => {
     setGymdata(data);
  }, [data, disptach])
  

  useEffect(() => {
    if(gymData !== undefined) {
        setLoading(true);
    }
  }, [gymData])

  console.log(gymData)

  return (
    <div>
        {loading===false?<div className={style.homeanimation}>
        <img src="https://wtfup.me/assets/loader.gif" alt="animation"  width="140px" height="140px"/>
        </div>:''}
      <Navbar stylename={navClass}></Navbar>
      <div className={style.home}>
        <div className={style.homeimage}>
          <img src="/main-div.png" alt="poster" width="100%" />
        </div>
      </div>
      <Search cityF= {setCity}></Search>
      <div className={style.homewithfilterandui}>
        <Filter cityF= {setCity}></Filter>
        <div className={style.homegyiuidiv}>
            {gymData?gymData.map((e) => {
                return (
                    <Gymui key={e.user_id} name={e.gym_name} rating={e.rating} address1={e.address1} address2={e.address2} city={e.city} state={e.state} minutes={e.duration_text} distance={e.distance_text}></Gymui>
                )
            }):null}
        </div>
      </div>
      <Wtffitness></Wtffitness>
      <Footer></Footer>
    </div>
  );
};
