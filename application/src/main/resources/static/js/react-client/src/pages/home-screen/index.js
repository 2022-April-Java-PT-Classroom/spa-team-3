import React from "react";
import art from '../../assets/art-supplies.svg';
import kids from '../../assets/kids.svg';
import planets from '../../assets/Planets.svg';
import style from './style.module.scss';

const HomeScreen =()=>{
    return(
    <div>


      <section className={style.heroSection}>
        <div className={style.heroGridText}>
          <h1>Welcome To JAC</h1>
          <h2>Mystery Educator Learning Portal</h2>
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
          <h3>Learn more about our Solar System with images from NASA</h3>
          <a href="/nasa">Blast Off!</a>
        </div>
      </section>

      <section className={style.artSection}>
        
        <div className={style.artGridText}>
          <h2>Discover Art</h2>
          <h3>Explore American artwork from the Metropolitan Museum Of Art</h3>
          <a href="/art">Get Creative!</a>
        </div>
        <div className={style.artGridImg}>
          <img src={art}></img>
        </div>
      </section>

      <section className={style.randSection}>
      <div className={style.randGridTextOne}>
          <h2>Create A Planet</h2>
          <a href="planets">Click Here!</a>
        </div>
        <div className={style.randGridTextTwo}>
          <h2>Color A Picture</h2>
          <a href="/create">Click Here!</a>
        </div>
        <div className={style.randGridTextThree}>
          <h2>Draw Some Art</h2>
          <a href="/draw">Click Here!</a>
        </div>
        <div className={style.randGridTextFour}>
          <h2>Do An Activity</h2>
          <a href="#">Click Here!</a>
        </div>
      </section>
    </div>
    );
}
export default HomeScreen;