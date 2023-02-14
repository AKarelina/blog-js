import React from 'react'
import classes from "./MyPosts.module.css";
import {Post} from "./Posts/Post";
export const MyPosts = () =>{
    return (
        <div className={classes.posts}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <div className={classes.add}>
                    <button>Add post</button>
                </div>
            </div>
            <Post message="I like your post" count='25'/>
            <Post message="Thank you" count='1'/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}