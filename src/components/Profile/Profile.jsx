import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPost';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://images.wired.it/wp-content/uploads/2018/05/31142433/1527762273_GettyImages-905245800.jpg'></img>
            </div>
            <div>
                ava + descript...
            </div>
            <MyPosts />
      </div>
    )
}

export default Profile;