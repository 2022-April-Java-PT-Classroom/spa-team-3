import React, { useState } from "react";
import style from './style.module.scss';
import PlanetService from '../../components/services/index'
import { useHistory } from "react-router-dom";

const AddPlanet = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [radius, setRadius] = useState('');

    const history = useHistory();

    const savePlanet = (e) => {
        e.preventDefault();

        const planet = {name, description, radius}
        PlanetService.createPlanet(planet).then((response => {

            console.log(response.data)
            history.push('/planets')

        })).catch(error =>{
            console.log(error);
        })
    }

    return(
        <div>
            <h2>Add Planet</h2>
            <form className={style.form}>
                <div className={style.formContainer}>
                <label htmlFor='name'> Name</label>
                <input 
                type='text' 
                required id='name' 
                placeholder="Enter name of your planet"
                value={name}
                onChange = {(e => setName(e.target.value))}    />

                </div>
                <div className={style.formContainer}>
                <label htmlFor='description'>Description of your planet</label>
                <textarea 
                id='description' 
                required 
                row='5' 
                placeholder="Describe your Planet"
                value={description}
                onChange ={(e => setDescription(e.target.value))}></textarea>
                </div>
                <div className={style.formContainer}>
                <label htmlFor='radius'>Radius  </label>
                <input
                 type='text'
                  required
                   id='radius' 
                   placeholder="Enter the radius of your planet"
                   value={radius}
                   onChange ={(e => setRadius(e.target.value))}/>

                </div>
                <div className={style.actions}>
                    <button onClick={(e) => savePlanet(e)}>submit</button>
                </div>
            </form>


            


        </div>

    
    )
}

export default AddPlanet;