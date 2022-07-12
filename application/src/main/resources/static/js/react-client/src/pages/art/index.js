import React from "react";
import style from "./style.module.scss";



const Art = () => {

    fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=13&hasImages=true")
        .then(response => response.json())
        .then(jsonData => {
            const collection = jsonData.objectIDs;
            const title = jsonData.title;
            const artist = jsonData.artistDisplayName;
            const department = jsonData.department;
            const image = jsonData.primaryImage;

            collection.forEach(artPiece => {
                const artTitle = document.querySelector("#art-title");
                artPiece.innerText = artPiece.title;
            });
        })
        .catch(err => console.log(err));

    return ( 
        <div>
            <h2>ART PAGE</h2> 
            <section id="art-section">
                <h3 id="art-title">Title</h3>
                <h4 id="art-artist">Artist</h4>
                <h5 id="art-department">Department</h5>
                <img src=""></img>
            </section>
        </div>
    );
}

export default Art;