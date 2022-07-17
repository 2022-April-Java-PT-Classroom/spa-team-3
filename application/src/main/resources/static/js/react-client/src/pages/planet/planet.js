import React, { useEffect, useState }  from "react";
import style from  './style.module.scss';
import PlanetService from '../../components/services/index'

const Planet = () => {
    const [planets, setPlanets] =useState([]);
    useEffect(() => {
        PlanetService.getAllPlanets().then((response => {
            setPlanets(response.data);
        })).catch(error => console.log(error))
            

    }, []);

    return (

        <div className= {style.container} >
            <h2>List of Planets</h2>
            <button className={style.actions}><a href="/add-planet">Add Planet</a></button>
            <div >
            <table className={style.tableContent}>
                <thead>
                  <tr>
                
                    <th>Planet Id</th>
                    <th>Planet Name</th>
                    <th>Planet Description</th>
                    <th>Planet Radius</th>
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