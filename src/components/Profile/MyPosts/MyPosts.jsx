import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addNewPost = () => {
        let action = {type: "ADD-POST", message: props.newPostText};
        props.dispatch(action);
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newPost: text});
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
}

export default MyPosts;