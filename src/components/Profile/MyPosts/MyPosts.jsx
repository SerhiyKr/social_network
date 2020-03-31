import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message="Hi, how are you?" likes='4' />
                <Post message="It's my first post" likes='7' />
            </div>
        </div>
    )
}

export default MyPosts;