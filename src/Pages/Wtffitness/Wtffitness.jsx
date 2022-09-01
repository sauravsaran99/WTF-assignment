import React from 'react'
import style from './Wtffitness.module.css'
export const Wtffitness = () => {
  return (
    <div className={style.wtf}>
        <div>
            <div>
                <div className={style.wtfheader}>WTF Fitness</div>
                <div className={style.wtfheader}>Experience?</div>
            </div>
            <div style={{
                display: "flex",
                marginTop: "40px"
            }}>
                <div className={style.gymline}></div>
                <div style={{
                    margin: "10px",
                    fontSize: "26px"
                }}>
                    <div>@your regular</div>
                    <div>gym cost?</div>
                </div>
            </div>
        </div>
        <div className={style.footerseondbox}>
            <div className={style.footershadowdiv}>
                <div>Modern</div>
                <div>Eqipments</div>
            </div>
            <div className={style.footershadowdiv}>
            <div>Skilled</div>
                <div>Trainer</div>
            </div>
            <div className={style.footershadowdiv}>
            <div>Top Class</div>
                <div>Ambiance</div>
            </div>
            <div className={style.footershadowdiv}>
            <div>Santized</div>
                <div>GYMS</div>
            </div>
            </div>
    </div>
  )
}
