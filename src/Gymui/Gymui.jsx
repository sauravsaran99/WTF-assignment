import React from 'react'
import style from './Gymui.module.css'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import NearMeIcon from '@mui/icons-material/NearMe';
export const Gymui = ({name, rating, address1, address2, city, state, minutes, distance}) => {

    console.log(name, rating, address1, address2, city, state)
  return (
    <div className={style.gymui}>
        <div style={{
            flex: ".4"
        }}></div>
        <div className={style.gymuicontent}>
            <h3>{name}</h3>
            <div>{rating>0?<div><StarIcon></StarIcon><StarIcon></StarIcon><StarIcon></StarIcon><StarIcon></StarIcon><StarIcon></StarIcon></div>:<div><StarBorderIcon></StarBorderIcon><StarBorderIcon></StarBorderIcon><StarBorderIcon></StarBorderIcon><StarBorderIcon></StarBorderIcon><StarBorderIcon></StarBorderIcon></div>}
            <div style={{
                margin: "5px 0"
            }}>{address1}, {address2},{city}</div>
            </div>
            <div style={{
                display: "flex",
                alignItems: "center",
                fontSize: "13px",
                margin: "10px 0"
            }}><NearMeIcon style={{ color: "green" }}></NearMeIcon> {minutes} away | {distance}</div>
            <div className={style.gymuibooknowbutton}>Book now</div>
        </div>
    </div>
  )
}
