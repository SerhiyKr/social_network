import React from "react";
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Serhiy
                </div>
                <div className={s.dialog}>
                    Georgie
                </div>
                <div className={s.dialog}>
                    Pupa
                </div>
            </div>
            <div className="messages">
                <div className={s.message}>Hiiii</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Fuck youuu...</div>
            </div>
        </div>
    )
}

export default Dialogs;