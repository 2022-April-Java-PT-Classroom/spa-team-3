import React, {useEffect, useState} from "react";
import Axios from "axios";
import style from "./style.module.scss";

const Create = () => {

    const [colorPages, setColorPages] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect (() => {

        const fetchColorPages = async () => {

            const result = await Axios("http://localhost:8080/print/pages");
            setColorPages(result.data);
        }

        if(colorPages) {
            setLoading(false);
        }

        const timer = setTimeout(() => {
            !colorPages && fetchColorPages();
          }, 500);
          return () => clearTimeout(timer);

    }, [colorPages]);

    return (
        loading ? <h3>Loading...</h3> :
        <div className={style.createPage}>
            <h2>Coloring Pages</h2>
            <div className={style.createContain}>
            {colorPages.map(colorPage => (
                <div key={colorPage.coloringId}>
                    <h3 className={style.createH3}>{colorPage.coloringTitle}</h3>
                    <img className={style.createImg} src={colorPage.coloringImage}></img>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Create;