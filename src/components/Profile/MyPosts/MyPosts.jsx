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
            <Post message="I like your post" count='25'/>
            <Post message="Thank you" count='1'/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}