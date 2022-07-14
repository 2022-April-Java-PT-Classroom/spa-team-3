import React from "react";

const SolarImages=({ images})=>{
    return images.map((image,index)=>{
        
        return(
            <div key={index}>
                <p>planets</p>
                <img src={image.links && image.links[0].href}alt=""/>
                <p></p>
            </div>
        )
    });
// 
}
export default SolarImages;