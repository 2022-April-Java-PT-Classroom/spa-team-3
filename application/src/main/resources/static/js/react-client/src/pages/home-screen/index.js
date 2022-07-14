import React from "react";
import style from './style.module.scss';

const HomeScreen =()=>{
    return(
    <div>
        <div className="space">
            <button type="onclick"className={style.nasa}>N</button>
        </div>
        <div className={style.spaceP}>
            <p>Let's explore all the planets and space with Nasa</p>
        </div>
        <div className="arts">
            <button type="onclick" className={style.art}>Museum Of Art</button>
            <p> Let's explore the Museum</p>
        </div>
    </div>
    );


}
export default HomeScreen;