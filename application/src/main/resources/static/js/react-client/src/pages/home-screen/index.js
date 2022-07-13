import React from "react";
import style from './style.module.scss';


const HomeScreen =()=>{
    return(
    <div>
      <section></section>
      <div className="nasa">
       <button type="onclick" id="space">Nasa</button>
       <p>Let's explore all the planets and space with Nasa</p>
       </div>

       <div className="arts">
         <button type="onclick" id="art">Museum Of Art</button>
         <p> Let's explore the Museum</p>
      </div>
    </div>
    );
}
export default HomeScreen;