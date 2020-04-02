import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {

    let post =[
        {id: 1, message: "Hi, how are you?", likes: 4},
        {id: 2, message: "It's my first post", likes: 7}
    ];

    let postsElements = post.map(p => <Post message={p.message} likes={p.likes} />);

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;