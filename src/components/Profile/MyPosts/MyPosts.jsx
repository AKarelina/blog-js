import React from 'react'
import classes from "./MyPosts.module.css";
import {Post} from "./Posts/Post";
import {v1} from "uuid";

export const MyPosts = () => {
    let postsData = [
        {id: v1(), message: "This is my first post", count: 100},
        {id: v1(), message: "I like your post", count: 12},
        {id: v1(), message: "Thank you", count: 9},
        {id: v1(), message: "Amazing!", count: 30},
    ]

    let postElements = postsData.map((e) => <Post id={e.id} message={e.message} count={e.count}/>)

    return (
        <div className={classes.posts}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <div className={classes.add}>
                    <button>Add post</button>
                </div>
            </div>
            {postElements}
            {/*<Post message="I like your post" count='25'/>*/}
            {/*<Post message="Thank you" count='1'/>*/}
            {/*<Post/>*/}
            {/*<Post/>*/}
            {/*<Post/>*/}
        </div>
    )
}