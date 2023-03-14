import d from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export const Dialog = (props) => {
    return <div className={d.dialog + " " + d.isActive}>
        <NavLink to={'/dialog/' + props.id}>{props.name}</NavLink>
    </div>
}