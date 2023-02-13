import React from 'react';
import d from './Dialogs.module.css';

export const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <div className={d.dialog}>
                    Anna
                </div>
                <div className={d.dialog}>
                   Valeria
                </div>
                <div className={d.dialog}>
                    David
                </div>
            </div>
            <div className={d.messages}>
                <div className={d.message}>Hi!</div>
                <div className={d.message}>I am Anna!</div>
                <div className={d.message}>Hi, How are you?!</div>
                <div className={d.message}>Hello!</div>
            </div>

        </div>

    )
}
