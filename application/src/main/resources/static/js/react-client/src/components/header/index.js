import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style.module.scss"

const Header =()=> {
    return(
        <div className="style.header">
            <h1>Web Page Name Here!</h1>
            <ul className={style.navList}>
                <NavLink to={'/'}>Home</NavLink>
                <br></br>
                <NavLink to={'/contact'}>Contact</NavLink>
                <br></br>
                <NavLink to={'/about'}>About</NavLink>
            </ul>
        </div>
    )
}
export default Header;
