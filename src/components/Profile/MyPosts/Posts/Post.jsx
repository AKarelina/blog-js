import React from 'react'
import p from "./Post.module.css";



export const Post = (props) => {
    return (
        <div className={p.item}>
            <div>
                <img  className={`${p.img}`} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcTMEA8ggj0H9QmIUwkaZO-kgONQvtIYBRWkhhRd3oi4WHJ__'/>
                {props.message}
            </div>
            post 1
            <div>
                <span>Like {props.count}</span>
            </div>
        </div>
    )
}