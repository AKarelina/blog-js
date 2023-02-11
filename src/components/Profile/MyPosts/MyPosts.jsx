import React from 'react'
import classes from "./MyPosts.module.css";
import {Post} from "./Posts/Post";
export const MyPosts = () =>{
    return (
        <div className={classes.posts}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message="I like your post"/>
            <Post message="Thank you"/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}