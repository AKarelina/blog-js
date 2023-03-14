import React from 'react';
import d from './Dialogs.module.css';
import {v1} from "uuid";
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";


let dialogsData = [
    {id: v1(), name: "David"},
    {id: v1(), name: "Anna"},
    {id: v1(), name: "Valeria"},
    {id: v1(), name: "Ivan"}]

let messagesData = [
    {id: v1(), text: "Hi, how are you?"},
    {id: v1(), text: "Hi, I am Anna"},
    {id: v1(), text: "Nice to see you here!"},
    {id: v1(), text: "Welcome!"}]

let dialogElements = dialogsData.map((dialog) => <Dialog name={dialog.name} id={dialog.id}/>)
let messageElements = messagesData.map((e) => <Message id={e.id} text={e.text}/>)
export const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogElements}
            </div>
            <div className={d.messages}>
                {messageElements}
            </div>
        </div>
    )
}
