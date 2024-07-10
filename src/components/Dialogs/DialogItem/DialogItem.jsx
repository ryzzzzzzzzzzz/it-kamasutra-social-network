import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src="https://cs6.pikabu.ru/avatars/829/v829136-376094816.jpg" alt="ava"/>
            <NavLink to={path} className={s.name}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem