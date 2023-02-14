import React from 'react';
import d from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


export const Dialog = (props) => {
    return <div className={d.dialog}>
        <NavLink to={'/dialog/' + props.id}>{props.name}</NavLink>
    </div>
}
export const Message = (props) => {
    return <div className={d.message}>{props.text}</div>
}

export const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <Dialog name='David' id='1'/>
                <Dialog name='Anna' id='2'/>
                <Dialog name='Valeria' id='3'/>
                <Dialog name='Ivan' id='4'/>
            </div>
            <div className={d.messages}>
                <Message text='Hi, I am Anna'/>
                <Message text='Hi, how are you?'/>
                <Message text='Nice to see you here!'/>
                <Message text='Welcome!'/>
            </div>
        </div>

    )
}
