import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {addNewPostActionCreator, onPostChangeActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addNewPost = () => {
        props.dispatch(addNewPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(onPostChangeActionCreator(text));
    };

    let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likes} />);

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}/>
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
};

export default MyPosts;