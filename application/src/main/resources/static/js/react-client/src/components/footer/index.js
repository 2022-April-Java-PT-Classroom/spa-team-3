import React from "react";
import style from './style.module.scss';

const Footer =()=>{
    return (
            <div className={style.footer}>
                <div className={style.footContainer}>
                <h4> &copy; Team 3 - WWCI JAC ENTERPRISES 2022 </h4>
                <ul className={style.footList}>
                   <li><a href="jackr-enterprises-site-main/index.html" target="_blank">Jac's Enterprises</a></li> 
                   <li><a href="https://github.com/2022-April-Java-PT-Classroom/spa-team-3">GitHub</a></li>
                   <li><a href="https://www.nasa.gov/Starport/Youth-Programs/Summer-Camps">NASA Summer Camps</a></li>
                   <li><a href="https://www.metmuseum.org/events/programs/met-creates/summer-camp">MET Summer Camps</a></li>
                </ul>
                </div>
            </div>
        )
    }
export default Footer;