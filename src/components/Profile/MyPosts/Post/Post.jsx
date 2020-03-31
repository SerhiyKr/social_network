import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (  
        <div className={s.posts}>
            <div className={s.item}>
                <img src='https://www.meme-arsenal.com/memes/c651160ee5a293f357522fdd83ddbf64.jpg'></img>
                { props.message }
                <div>
                    <span>like { props.likes }</span>
                </div>
            </div>
        </div>
    )
}

export default Post;