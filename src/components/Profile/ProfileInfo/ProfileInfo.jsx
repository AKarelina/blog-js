import React from 'react'
import i from "./ProfileInfo.module.css";


export const ProfileInfo = (props) => {
    return (
        <div>
            <div >
                <img className={`${i.content} ${i.img}`} src='https://dol.ny.gov/sites/g/files/oee1171/files/media/2021/03/hero-newyorkcity.jpg'/>
            </div>
            <div className={i.ava}>
                ava + description
            </div>
        </div>
    )
}