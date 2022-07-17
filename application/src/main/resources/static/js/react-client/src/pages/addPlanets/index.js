import React, { useEffect, useState } from "react";
import style from './style.module.scss';
import PlanetService from '../../components/services/index'
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const AddPlanet = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [radius, setRadius] = useState('');

    const history = useHistory();
    const {id} = useParams();

    const saveOrUpdatePlanet = (e) => {
        e.preventDefault();

        const planet = {name, description, radius}

        history.push('/planets');

        if(id){
            PlanetService.updatePlanet(id,planet).then((response) => {

                


            }).catch((error) =>{
                console.log(error)
            })


        }else{

            PlanetService.createPlanet(planet).then((response => {

                console.log(response.data)
                history.push('/planets')
    
            })).catch(error =>{
                console.log(error);
            })

        }
       
    }

    useEffect(() => {
        PlanetService.getPlanetById(id).then((response => {
            setName(response.data.name);
            setDescription(response.data.description);
            setRadius(response.data.radius);
        })).catch(error => {
            console.log(error);
        })

    }, []);

    const title = () =>{
        if(id){
            return <h2>Update Planet</h2>
        }else {
            return <h2>Add Planet</h2>
        }

    }

    return(
        <div>
            
            {title()}

            
         
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
                    <button onClick={(e) => saveOrUpdatePlanet(e)}>submit</button>
                    <Link to={'/planets'} >Cancel</Link>
                </div>
            </form>


            


        </div>

    
    )
}

export default AddPlanet;