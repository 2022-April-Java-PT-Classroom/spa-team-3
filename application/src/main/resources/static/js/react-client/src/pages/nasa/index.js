import React, { useEffect, useState } from "react";

import Axios from "axios";
import PlanetsImages from "../../components/planets-images";
import style from "./style.module.scss"

const Nasa = () => {
    const [images,setImages] = useState(null);
    const[loading,setLoading]=useState(true);

    useEffect(() =>{
        const fetchData = async () =>{
            const result = await Axios("https://images-api.nasa.gov/search?q=solarsystem");
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
            <h2>NASA PAGE</h2>
            <section>
                {loading ? <h3> Loading ...</h3> : <PlanetsImages images={images} />}
            </section>
        </div>
    );
};

export default Nasa;