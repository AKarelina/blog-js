import React from "react";
import n from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    const activeLink = (obj) => {
        // console.log(obj)
        return obj.isActive === true ? `${n.activeLink}` : `${n.item}`
    }
    const SidebarLink = (props) => {
        return <div className={n.item}>
            <NavLink to={props.sidebarOption} className={activeLink}>{props.name}</NavLink>
        </div>
    }

    return (
        <nav className={n.nav}>
            <SidebarLink sidebarOption='/profile' name="Profile"/>
            <SidebarLink sidebarOption='/dialogs' name="Messages"/>
            <SidebarLink sidebarOption='/news' name="News"/>
            <SidebarLink sidebarOption='/music' name="Music"/>
            <SidebarLink sidebarOption='/settings' name="Settings"/>
        </nav>
    )
}