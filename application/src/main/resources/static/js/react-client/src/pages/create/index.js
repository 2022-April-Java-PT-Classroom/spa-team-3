import React, {useEffect, useState} from "react";
import Axios from "axios";
import style from "./style.module.scss";

const Create = () => {

    const [colorPages, setColorPages] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect (() => {

        const fetchColorPages = async () => {

            const result = await Axios("http://localhost:8080/api/printables");
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
        
        // PRINT =============================================================

        function printImage() {
            const printable = window.open(document.getElementById("coloring").src);
            printable.focus();
            printable.print();
        }

    return (
        loading ? <h3>Loading...</h3> :
        <div className={style.createPage}>
            <h5 className={style.createH5}>Coloring Pages</h5>
            <div className={style.createContain}>
            {colorPages.map(colorPage => (
                <div key={colorPage.coloringId} className={style.createContainSub}>
                    <h3 className={style.createH3}>{colorPage.coloringTitle}</h3>
                    <img id="coloring" className={style.createImg} src={colorPage.coloringImage} onClick={() => printImage()}></img>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Create;