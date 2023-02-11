import React from "react";
import p from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
export const Profile = () => {
    return (
        <div className={p.content}>
            <div >
                <img className={`${p.content} ${p.img}`} src='https://dol.ny.gov/sites/g/files/oee1171/files/media/2021/03/hero-newyorkcity.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}