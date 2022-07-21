import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import style from "./style.module.scss";
import logo from "../../assets/logo2.png";

const Header =()=> {

    
    return (
        <div className={style.header}>
            <div className={style.nav}>
            {/* <h1>Jac's Mystery Educator</h1> */}
            <img src={logo} className={style.logo}></img>
            <ul className={style.navList}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/nasa'}>Nasa</NavLink>
                <NavLink to={'/art'}>Art</NavLink>
                <NavLink to={'/planets'}>Planets</NavLink>
                <NavLink to={'/create'}>Create</NavLink>
                <NavLink to={'/draw'}>Draw</NavLink>

            </ul>
            </div>
        </div>
    );
}
export default Header;
