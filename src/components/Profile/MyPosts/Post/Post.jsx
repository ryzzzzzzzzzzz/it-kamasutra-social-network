import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.postBlock}>
            <div className={s.item}>
                <img src="https://cs6.pikabu.ru/avatars/829/v829136-376094816.jpg" alt="ava"/>
                {props.message}
            </div>
            <span>Like</span> {props.likesCount}
        </div>
    )
}

export default Post;