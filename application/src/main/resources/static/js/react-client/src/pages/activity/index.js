import React, {useEffect, useState} from "react";

import Axios from "axios";
import style from "./style.module.scss";

const Activity = () => {

const [activity, setActivity] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchData = async () => {

        const result = await Axios("http://boredapi.com/api/activity");
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
            <div>
                <h1>Activity Name: {activity.activity}</h1>
                <h1>Type: {activity.type}</h1>
                <h1>Price: {activity.price}</h1>
            </div>
     </section>
    </div>
);
}

export default Activity;