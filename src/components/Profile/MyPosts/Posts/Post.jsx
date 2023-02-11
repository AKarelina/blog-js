import React from 'react'
import p from "./Post.module.css";


type PostPropsType = {

}
export const Post = () => {
    return (
        <div className={p.item}>
            <div>
                <img  className={`${p.img}`} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcTMEA8ggj0H9QmIUwkaZO-kgONQvtIYBRWkhhRd3oi4WHJ__'/>
            </div>
            post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}