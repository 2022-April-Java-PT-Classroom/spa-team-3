import { NavLink } from "react-router-dom";
import React from "react";
import logo from "../../assets/logo2.png";
import style from "./style.module.scss";

const Header =()=> {

    return (
        <div className={style.header}>
            <div className={style.nav}>
            <img src={logo} className={style.logo} alt={"logo"}></img>
            <ul className={style.navList}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/nasa'}>Nasa</NavLink>
                <NavLink to={'/planets'}>Planets</NavLink>
                <NavLink to={'/art'}>Art</NavLink>
                <NavLink to={'/create'}>Create</NavLink>
                <NavLink to={'/draw'}>Draw</NavLink>
                <NavLink to={'/activity'}>Activity</NavLink>
            </ul>
            </div>
        </div>
    );
}
export default Header;
