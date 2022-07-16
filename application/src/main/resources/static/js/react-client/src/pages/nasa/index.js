import React, { useEffect, useState } from "react";

import Axios from "axios";
import { Link } from "react-router-dom";
import ShuttleImages from "../../components/shuttle-images";
import SolarImages from "../../components/solar-images";
import style from "./style.module.scss"

const Nasa = () => {
   
    
    const [images,setImages] = useState(null);
    const[loading,setLoading]=useState(true);

    useEffect(() =>{
        const fetchData = async () =>{
            const result = await Axios( "https://images-api.nasa.gov/search?q=solarsystem&description");
            console.log(result.data);
            setImages(result.data.collection.items);

    };
    if(images){
        setLoading(false);
    };
    const timer = setTimeout(()=>{
        !images && fetchData();

    } ,1000);
    return ()=> clearTimeout(timer);
    },[images]);  
    
    // const nasalink = document.querySelector('#nasalink');
    

    // function nasalink (){
    //     nasalink.innerHTML = URL"https://www.nasa.gov/';
    // }
      
     return (
        <div>
           
            <section className={style.heroSection}>
            <div className={style.heroGridText}> 
            {loading ? <h3 className={style.heroGridImg}> Loading ...</h3> : <SolarImages images={images} />} 
                </div>   
            </section>
                
        </div>
        
    );

}
export default Nasa;