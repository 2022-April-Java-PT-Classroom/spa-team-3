import React, { useState }  from "react";
import style from  './style.module.scss';

const Planet = () => {
    const [planets, setPlanets] =useState([]);

    return (

        <div className= {style.container} >
            <h2>List of Planets</h2>
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
                        planets.map(planet => {
                            <tr key={planet.id}>
                                <td>{planet.id}</td>
                                <td>{planet.name}</td>
                                <td>{planet.description}</td>
                                <td>{planet.radius}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            </div>

        </div>
    )
}
export default Planet;