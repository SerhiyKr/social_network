import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

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