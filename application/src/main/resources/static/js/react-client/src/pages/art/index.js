import React, {useEffect, useState} from "react";
import { Axios } from "axios";
import style from "./style.module.scss";

const Art = () => {
    
    // const [loading, setLoading] = useState(true);
    // const [collection, setCollection] = useState(null);

    // useEffect( () => {

    //     const fetchArtData = async () => {
    //         const result = await Axios("")
    //     }
    // }, []);

    fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/42332")
    .then(response => response.json())
    .then(jsonData => {
        const title = jsonData.title;
        const artist = jsonData.artistDisplayName;
        const department = jsonData.department;
        const image = jsonData.primaryImage;

        console.log(title);
        console.log(artist);
        console.log(department);

        const artTitle = document.querySelector("#title");
        const artArtist = document.querySelector("#artist");
        const artDepartment = document.querySelector("#department");
        const artImage = document.querySelector("#image");

        artTitle.innerText = title;
        artArtist.innerText = artist;
        artDepartment.innerText = department;
        artImage.src = image;
    })
    .catch(err => console.log(err));

    // fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=1")
    //     .then(response => response.json())
    //     .then(jsonData => {
    //         const collection = jsonData.objectIDs; // Returns entire array
    //         // console.log(collection);
    //         collection.forEach(function(i) {
    //             const artId = document.createElement('p');
    //             artId.innerText = collection[i];
    //         })
    //     })
    //     .catch(err => console.log(err));

    return ( 
        <div>
            <h2>ART PAGE</h2> 
            <section id="art-section">
                <p id="title">title</p>
                <p id="artist">artist</p>
                <p id="department">department</p>
                <img id="image" src="" width="30%"></img>
            </section>
        </div>
    );
}

export default Art;