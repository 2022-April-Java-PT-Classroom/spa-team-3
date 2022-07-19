import React, {useEffect, useState} from "react";
import Axios from "axios";
import style from "./style.module.scss";

// Department Link
// https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=1

var artCollection;

const Art = () => {

    // FETCH ID ==========================================================

        fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=1")
            .then(response => response.json())
            .then(jsonData => artCollection = jsonData.objectIDs)
            .catch(err => console.log(err));

    // AXIOS ==============================================================

    const [piece, setPiece] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {

            const artSingle = artCollection[Math.floor(Math.random() * artCollection.length)];
            const result = await Axios(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artSingle}`);
            setPiece(result.data);
        };
    
        if (piece) {
          setLoading(false);
        }
    
        const timer = setTimeout(() => {
          !piece && fetchData();
        }, 1000);
        return () => clearTimeout(timer);
        
    }, [piece]);

    return ( 
        loading ? <h3>Loading...</h3> :
        <div>
            <section className={style.artSection}>
                <div className={style.artGridText}>
                    <h1 id="title">Name: {piece.title}</h1>
                    <h4 id="artist">Artist: {piece.artistDisplayName}</h4>
                    <h4 id="department">Department: {piece.department}</h4>
                    <h3 id="medium">Medium: {piece.medium}</h3>
                    <h3>Date: <span id="begin">{piece.objectBeginDate}</span>-<span id="end">{piece.objectEndDate}</span></h3>
                    {/* <button onClick={refresh}>More Art</button> */}
                    <a href="/art">More Art</a>
                </div>
                <div className={style.artGridImg}>
                <img id="image" src={piece.primaryImage}></img>
                </div>
         </section>
        </div>
    );
}

export default Art;