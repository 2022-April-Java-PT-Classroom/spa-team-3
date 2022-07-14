import React from "react";
import style from './style.module.scss';

const HomeScreen =()=>{
    return(
    <div>
      <section className={style.hero}>
        <div className={style.heroText}>
          <h1>Welcome To JAC Enterprises</h1>
          <h2>Mystery Educator Learning</h2>
        </div>
      </section>
      <section>
        <h1>Welcome To JAC Enterprises</h1>
        <div className={style.cardContain}>
        <a href="#" className={style.cards}>EXPLORE NASA</a>
        <a href="#" className={style.cards}>EXPLORE ART</a>
        <a href="#" className={style.cards}>COLOR</a>
        </div>
      </section>
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