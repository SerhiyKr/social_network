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

    let dialogs = [
        {id: 1, name: "Serhiy"},
        {id: 2, name: "Pupa"},
        {id: 3, name: "Lupa"}
    ];

    let messages = [
        {id: 1, message: "Hiii"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Fuck youuu..."}
    ];

    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className="messages">
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;