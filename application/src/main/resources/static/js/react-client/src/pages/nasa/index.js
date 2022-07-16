import React, { useEffect, useState } from "react";

import Axios from "axios";
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
    
   
    
     return (
        <div>
           
            <section className={style.heroSection}>
            <div className={style.heroGridText}> 
            {loading ? <h3 className={style.heroGridImg}> Loading ...</h3> : <SolarImages images={images} />}
                {/* {loading ? <h3 className={style.heroGridText}>Loading ...</h3> : <SolarImages titles={image.data.titles} />} */}
               
                </div>
            </section> 
        </div>
    );

}
export default Nasa;