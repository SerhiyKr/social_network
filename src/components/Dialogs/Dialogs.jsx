import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {onMessageBodyChangeActionCreator, sendNewMessageActionCreator} from "../../redux/state";

const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let dialogsElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = props.state.messages.map(m => <Message message={m.message}/>);

    const onMessageChange = (e) => {
        let body = newMessageElement.current.value
        props.dispatch(onMessageBodyChangeActionCreator(body))
    }
    const sendMessage = () => {
        props.dispatch(sendNewMessageActionCreator())
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className="messages">
                <div>{messagesElement}</div>
                <div>
                    <textarea
                        placeholder="Enter your message"
                        value={props.newMessageBody}
                        onChange={onMessageChange}
                        ref={newMessageElement}>
                    </textarea>
                </div>
                <div><button onClick={sendMessage}>Send</button></div>
            </div>
        </div>
    )
}

export default Dialogs;