import React from "react";
import n from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    const activeLink = (obj) => {
        return obj.isActive === true ? `${n.activeLink}`: `${n.item}`
    }
    return (
        <nav className={n.nav}>
            <div className={n.item}>
                <NavLink to='/profile' className={activeLink}>Profile</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/dialogs' className={activeLink}>Messages</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/news' className={activeLink}>News</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/music' className={activeLink}>Music</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/settings' className={activeLink}>Settings</NavLink>
            </div>

        </nav>
    )
}