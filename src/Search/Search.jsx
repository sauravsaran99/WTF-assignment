import React from 'react'
import style from './Search.module.css'
import SearchIcon from '@mui/icons-material/Search';
import RoomIcon from '@mui/icons-material/Room';
export const Search = () => {
  return (
    <div className={style.search}>
        <div className={style.searchsearchicon}>
            <SearchIcon style={{ color: "white" }}></SearchIcon>
        </div>
        <div className={style.searchinput}>
            <input type="text" />
        </div>
        <div className={style.searchlocationandclear}>
            <div className={style.searchlocationicon}>
                <RoomIcon style={{ color: "white" }}></RoomIcon>
            </div>
            <div className={style.searchclearbutton}>Clear</div>
        </div>
    </div>
  )
}
