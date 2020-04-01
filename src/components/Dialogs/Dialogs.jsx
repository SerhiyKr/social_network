import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
};

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Serhiy" id="1"/>
                <DialogItem name="Pupa" id="2"/>
                <DialogItem name="Lupa" id="3"/>
            </div>
            <div className="messages">
                <Message message="Hiii"/>
                <Message message="How are you"/>
                <Message message="Fuck youuu..."/>
            </div>
        </div>
    )
}

export default Dialogs;