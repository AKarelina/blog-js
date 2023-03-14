import React from 'react';
import d from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {v1} from "uuid";


export const Message = (props) => {
    return <div className={d.message} id={props.id}>{props.text}</div>
}
