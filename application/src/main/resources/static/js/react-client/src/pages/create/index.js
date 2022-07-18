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

        fetchColorPages();

    }, [colorPages]);

    console.log(colorPages);

    return (
        <div>

        </div>
    );
}

export default Create;