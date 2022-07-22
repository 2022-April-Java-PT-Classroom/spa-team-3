import React from "react";
import art from '../../assets/art-supplies.svg';
import kids from '../../assets/kids.svg';
import planets from '../../assets/Planets.svg';
import style from './style.module.scss';
import { Link } from "react-router-dom";

const HomeScreen =()=>{
    return(
    <div>


      <section className={style.heroSection}>
        <div className={style.heroGridText}>
          <h1>Welcome To JAC</h1>
          <h2>Mystery Educator Learning Portal</h2>
          <Link to={'/contact'}>Learn More</Link>

        </div>
        <div className={style.heroGridImg}>
          <img src={kids} alt={"classroom-kids"}></img>
        </div>
      </section>

      <section className={style.nasaSection}>
        <div className={style.nasaGridImg}>
          <img src={planets} alt={"space"}></img>
        </div>
        <div className={style.nasaGridText}>
          <h2>Explore Space</h2>
          <h3>Learn more about our Solar System with images from NASA</h3>
          <Link to={'/nasa'}>Blast Off!</Link>
        </div>
      </section>

      <section className={style.artSection}>
        
        <div className={style.artGridText}>
          <h2>Discover Art</h2>
          <h3>Explore American artwork from the Metropolitan Museum Of Art</h3>
          <Link to={'/art'}>Be Inspired!</Link>
        </div>
        <div className={style.artGridImg}>
          <img src={art} alt={"paint"}></img>
        </div>
      </section>

      <section className={style.randSection}>
      <div className={style.randGridTextOne}>
          <h2>Create A Planet</h2>
          <Link to={'/planets'}>Click Here</Link>
        </div>
        <div className={style.randGridTextTwo}>
          <h2>Color A Picture</h2>
          <Link to={'/create'}>Click Here!</Link>
        </div>
        <div className={style.randGridTextThree}>
          <h2>Draw Some Art</h2>
          <Link to={'/draw'}>Click Here!</Link>
        </div>
        <div className={style.randGridTextFour}>
          <h2>Do An Activity</h2>
          <Link to={'/activity'}>Click Here!</Link>
        </div>
      </section>
    </div>
    );
}
export default HomeScreen;