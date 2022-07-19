import React, { useEffect, useState } from "react";

import Axios from "axios";
import { Link } from "react-router-dom";
import SolarImages from "../../components/solar-images";
import style from "./style.module.scss"

const Nasa = () => {
   
    const [images,setImages] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() =>{
        const fetchData = async () =>{
            const result = await Axios("https://images-api.nasa.gov/search?q=planets");
            console.log(result.data);
            // console.log(result.data.collection.version);
            // console.log(result.data.collection.items[0].href);
            // console.log(result.data.collection.items[0].links[0].href); // Returns object image
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
    
     return (
      
        <div className={style.nasaPage}>
            <a id="nasa"href="https://www.nasa.gov/">Nasa Website </a>
            <section className={style.nasaSection}>
            <div className={style.nasaText}> 
            {loading ? <h3 className={style.nasaImg}> Loading ...</h3> : <SolarImages images={images} />} 
            {/* {loading ? <h3 className={style.nasaImg}> Loading ...</h3> : <img src={images}></img>}  */}
            </div>   
            </section>
        </div>
    );
}

export default Nasa;