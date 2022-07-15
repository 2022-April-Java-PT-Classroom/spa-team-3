import React from "react";
import style from './style.module.scss';

const HomeScreen =()=>{
    return(<div>
        <div className="nasa">
            <button type="onclick" id="space">Nasa</button>
        </div>
        <div className="spaceP">
            <p>There are more planets than stars in our galaxy. The current count orbiting our star: eight.

The inner, rocky planets are Mercury, Venus, Earth, and Mars. The outer planets are gas giants Jupiter and Saturn and ice giants Uranus and Neptune.

Beyond Neptune, a newer class of smaller worlds called dwarf planets reign, including longtime favorite Pluto. Thousands more planets have been discovered beyond our solar system. Scientists call them exoplanets (exo means "from outside").</p>
        </div>


        <div className="arts">
            <button type="onclick" id="art">Museum Of Art</button>
            <p> Let's explore the Museum</p>
        </div>
    </div>
    );


}
export default HomeScreen;