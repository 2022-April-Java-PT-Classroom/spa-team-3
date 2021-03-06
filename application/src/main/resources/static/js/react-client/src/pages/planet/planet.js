import React, { useEffect, useState }  from "react";
import style from  './style.module.scss';
import PlanetService from '../../components/planet-service/index';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


const Planet = () => {

    const [planets, setPlanets] =useState([]);
    

    useEffect(() => {
        
        retrieveAllPlanets(); 

    }, []);

    const retrieveAllPlanets = () => {
        PlanetService.getAllPlanets().then((response => {
            setPlanets(response.data)
           
        })).catch(error => console.log(error))
    }

    const removePlanet = (planetId) => {
    
       PlanetService.deletePlanet(planetId).then((response => {

        retrieveAllPlanets();
        console.log(response)
           
       })).cath((error => {
           console.log(error);
       }))
    }

    return (

        <div className= {style.planetContainer}>
            <div className={style.planetHeader}>
                <h2 className={style.planetH2}>Create Your Own Planet</h2>
                <Link to={'/add-planet'} className={style.planButton}>Add Your Planet</Link>
            </div>

            <div className={style.planetGrid}>
            {planets.map(planet => (
            <div className={style.planetInner} key={planet.id}>
                <img className={style.planetGridImg} src={planet.planetImage} alt={"planets"}></img>
                <h3 className={style.planetInnerH3}>{planet.name}</h3>
                <h4 className={style.planetInnerH4}>{planet.description}</h4>
            </div>
            ))}
            </div>

            <div>
            <table className={style.planetTableContent}>
                <thead>
                  <tr>
                    <th>Planet Id</th>
                    <th>Planet Name</th>
                    <th>Planet Description</th>
                    <th>Planet Radius</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        planets.map(planet => 
                            <tr key={planet.id}>
                                <td>{planet.id}</td>
                                <td>{planet.name}</td>
                                <td>{planet.description}</td>
                                <td>{planet.radius}</td>
                                <td>
                                    <button className={style.actions}><Link to={`/edit-planet/${planet.id}`}>Update</Link></button>
                                    <button className={style.actions} onClick={() =>removePlanet(planet.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Planet;