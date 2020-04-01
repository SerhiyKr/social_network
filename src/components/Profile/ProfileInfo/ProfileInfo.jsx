import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://images.wired.it/wp-content/uploads/2018/05/31142433/1527762273_GettyImages-905245800.jpg'></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + descript...
            </div>
        </div>
    )
}

export default ProfileInfo;