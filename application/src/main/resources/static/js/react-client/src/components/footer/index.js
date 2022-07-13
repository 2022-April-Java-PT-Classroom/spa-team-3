import React from "react";
import style from './style.module.scss';

const Footer =()=>{
    return(
            <div className={style.footer}>
                <small> &copy; Jac's 2022 </small>
                <ul className={style.footList}>
                   <li> Jac's</li> 
                   <li>GitHub</li>
                </ul>
            </div>
        )
}
export default Footer;