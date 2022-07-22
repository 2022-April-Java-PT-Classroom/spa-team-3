import React, {useEffect, useState} from "react";

import Axios from "axios";
import style from "./style.module.scss";

const Activity = () => {

const [activity, setActivity] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchData = async () => {

        const result = await Axios("http://www.boredapi.com/api/activity/");
        setActivity(result.data);
    };

    if (activity) {
        setLoading(false);
    }
    
    const timer = setTimeout(() => {
        !activity && fetchData() ;
    }, 1000);
    return () => clearTimeout(timer);
    
}, [activity]);

return ( 
    loading ? <h3>Loading...</h3> :
    <div>
        <section>
            <div className={style.ActivityGrid}>
                <h1>Activity Name: {activity.activity}</h1>
                <h2>Type: {activity.type}</h2>
                <h3>Price: {activity.price}</h3>
                <h4>Link:{activity.link}</h4>
                <h5>Participants:{activity.participants}</h5>
                <h6>Key:{activity.key}</h6>
            
            </div>
     </section>
    </div>
);
}

export default Activity;