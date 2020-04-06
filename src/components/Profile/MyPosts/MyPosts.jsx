import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {addPost} from "../../../redux/state";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addNewPost = () => {
      let text = newPostElement.current.value;
      addPost(text);
        newPostElement.current.value = "";
    };

    let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likes} />);

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addNewPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;