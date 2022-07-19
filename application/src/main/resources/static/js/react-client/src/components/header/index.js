import { NavLink } from "react-router-dom";
import React from "react";
import style from "./style.module.scss"

const Header =()=> {
    return (
        <div className={style.header}>
            <div className={style.nav}>
            <h1>Jac's Mystery Educator</h1>
            <ul className={style.navList}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/nasa'}>Nasa</NavLink>
                <NavLink to={'/art'}>Art</NavLink>
                <NavLink to={'/planets'}>Planets</NavLink>
                <NavLink to={'/draw'}> cd
                Draw </NavLink>
            </ul>
            </div>
        </div>
    );
}
export default Header;
