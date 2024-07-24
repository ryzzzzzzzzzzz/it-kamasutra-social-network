import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>;
    }

    return (
        <div>
            <div>
                <img
                    src="https://c.wallhere.com/photos/7e/79/artwork_waterfall_forest_Gravity_Falls_multiple_display-1380459.jpg!d"
                    alt="walpapper"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="ava"/>
                +description
            </div>
        </div>
    )
}

export default ProfileInfo;