import React from "react";
import { getByTitle } from "@testing-library/react";

const SolarImages=({ images})=>{
    return images.map((image,index)=>{
        console.log(image);
       
        return (
            <div key={index}>
                <img src={image.links[0].href} alt=""/>
                <p >Title:{image.data[0].title  }</p> 
                <h4 >Location: {image.data[0].location }</h4>
                <h4 >Date : {image.data[0].date_created }</h4>
            </div>
        )
    });
}
export default SolarImages;