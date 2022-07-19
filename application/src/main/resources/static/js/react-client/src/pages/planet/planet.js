import React, { useEffect, useState }  from "react";
import style from  './style.module.scss';
import PlanetService from '../../components/services/index'
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

    

    

    const deletePlanet = (planetId) => {
       PlanetService.deletePlanet(planetId).then((response => {

        retrieveAllPlanets();
        

        console.log(response)
           
           

       })).cath((error => {
           console.log(error);
       }))

       
      
   

    }

    return (

        <div className= {style.planetContainer} >
            <h2>List of Planets</h2>
            <Link to={'/add-planet'}>Add Planet</Link>
            <div >
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
                                    <Link to={`/edit-planet/${planet.id}`}> Update</Link>
                                </td>
                                <td>
                                <button className={style.actions} onClick={() =>deletePlanet(planet.id)}>Delete</button>
                                  
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