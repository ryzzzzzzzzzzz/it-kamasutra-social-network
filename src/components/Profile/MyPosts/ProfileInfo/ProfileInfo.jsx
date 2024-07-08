import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://c.wallhere.com/photos/7e/79/artwork_waterfall_forest_Gravity_Falls_multiple_display-1380459.jpg!d"
                    alt="walpapper"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src="https://i1.sndcdn.com/avatars-000150984284-23nrw1-t500x500.jpg" alt="ava"/>
                +description
            </div>
        </div>
    )
}

export default ProfileInfo;