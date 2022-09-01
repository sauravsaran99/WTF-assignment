import React from 'react'
import style from './Filter.module.css'
import SearchIcon from '@mui/icons-material/Search';
export const Filter = ({cityF}) => {
  return (
    <div className={style.filter}>
        <div style={{
            fontSize: "38px",
            marginBottom: "20px"
        }}>Filters</div>
        <div style={{
            fontWeight: "bold",
            marginBottom: "20px",
            fontSize: "18px"
        }}>Location</div>
        <div className={style.locationfilter}>
            <div><SearchIcon></SearchIcon></div>
            <div><input onChange={(e) => cityF(e.target.value)} type="text" name="" placeholder='Enter Location' style={{
                backgroundColor: "rgb(58, 58, 58)"
            }} /></div>
        </div>
        <div style={{
            fontWeight: "bold",
            marginBottom: "20px",
            marginTop: "20px",
            fontSize: "18px"
        }}>Price</div>
        <div className={style.minmax}>
        <input type="text" name="" id="" placeholder='Min' style={{
            padding: '10px 5px'
        }}/>
        <input type="text" name="" id="" placeholder='Max' style={{
            padding: '5px'
        }}/>
        </div>
        <div style={{
            fontWeight: "bold",
            marginBottom: "20px",
            marginTop: "20px",
            fontSize: "18px"
        }}>Cities</div>
        <select onChange={(e) => cityF(e.target.value)} className={style.cityselectoption}>
            <option value="nothing">Select city</option>
            <option value="Gaziabad">Gaziabad</option>
            <option value="Greater Nodia">Greater Nodia</option>
            <option value="Noida">Noida</option>
            <option value="Delhi">Delhi</option>
        </select>
    </div>
  )
}
