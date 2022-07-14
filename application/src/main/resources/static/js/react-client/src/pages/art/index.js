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

    const numId = 205

    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${numId}`)
    .then(response => response.json())
    .then(jsonData => {

        const title = jsonData.title;
        const artist = jsonData.artistDisplayName;
        const department = jsonData.department;
        const image = jsonData.primaryImage;
        const medium = jsonData.medium;
        const dateBegin = jsonData.objectBeginDate;
        const dateEnd = jsonData.objectEndDate;

        // console.log(title);
        // console.log(artist);
        // console.log(department);

        const artTitle = document.querySelector("#title");
        const artArtist = document.querySelector("#artist");
        const artDepartment = document.querySelector("#department");
        const artImage = document.querySelector("#image");
        const artMedium = document.querySelector("#medium");
        const artBegin = document.querySelector("#begin");
        const artEnd = document.querySelector("#end");


        artTitle.innerText = "Title: " + title;
        artArtist.innerText = "Artist: " + artist;
        artDepartment.innerText = "Department: " + department;
        artImage.src = image;
        artMedium.innerText = "Medium: " + medium;
        artBegin.innerText = dateBegin;
        artEnd.innerText = dateEnd;
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

            <section className={style.heroSection}>
                <div className={style.heroGridText}>
                    <h1 id="title">Name</h1>
                    <h2 id="artist">Artist</h2>
                    <h2 id="department">Department</h2>
                    <h3 id="medium">Medium</h3>
                    <h3>Date: <span id="begin">Begin</span>-<span id="end">End</span></h3>
                    <a href="#">More Art</a>
                </div>
                <div className={style.heroGridImg}>
                <img id="image"></img>
                </div>
         </section>
        </div>
    );
}

export default Art;