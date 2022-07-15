import React from "react";
import style from './style.module.scss';
import planets from '../../assets/Planets.svg';
import art from '../../assets/art-supplies.svg';
import kids from '../../assets/kids.svg';

const HomeScreen =()=>{
    return(
    <div>

      <section className={style.heroSection}>
        <div className={style.heroGridText}>
          <h1>Welcome To JAC</h1>
          <h2>Mystery Educator Learning</h2>
          <a href="/about">About Us</a>
        </div>
        <div className={style.heroGridImg}>
          <img src={kids}></img>
        </div>
      </section>

      <section className={style.nasaSection}>
        <div className={style.nasaGridImg}>
          <img src={planets}></img>
        </div>
        <div className={style.nasaGridText}>
          <h2>Explore Space</h2>
          <a href="/nasa">Blast Off!</a>
        </div>
      </section>

      <section className={style.artSection}>
        
        <div className={style.artGridText}>
          <h2>Discover Art</h2>
          <a href="/art">Get Creative!</a>
        </div>
        <div className={style.artGridImg}>
          <img src={art}></img>
        </div>
      </section>

      <section className={style.randSection}>
        <div className={style.randGridImg}>
          <img src={art}></img>
        </div>
        <div className={style.randGridText}>
          <h2>Another Section</h2>
          <a href="#">Link Here!</a>
        </div>
      </section>
    </div>
    );
}
export default HomeScreen;