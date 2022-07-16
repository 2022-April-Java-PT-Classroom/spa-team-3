import React from "react";
import { getByTitle } from "@testing-library/react";

const SolarImages=({ images})=>{
    return images.map((image,index,)=>{
        console.log(image.data[0].href);
       
        return(
            
            
            <div key={index}>
                 <div className="nasa">
                 <a className="link" href="https://www.nasa.gov/">Nasa</a>
                 </div>
                <img src={image.links[0].href}alt=""/>
                <p className="title">Title:{image.data[0].title  }</p> 
                <h4 className="location">Location: {image.data[0].location }</h4>
                <h4 className="date">Date : {image.data[0].date_created }</h4>
               
                
            </div>
        )
    });

}
export default SolarImages;