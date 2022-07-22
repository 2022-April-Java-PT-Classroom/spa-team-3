import React, {useEffect, useState} from "react";
import Group from "../../assets/activity.png"
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
    <div className={style.ActivityGrid}>
        <section>
            <div className={style.ActivityContainer}>
                <img className={style.ActivityImg} src={Group} alt={"kids"}></img>
                <h2>Activity Name: {activity.activity}</h2>
                <h2>Type: {activity.type}</h2>
                <h2>Price Point: {activity.price}</h2>
                <h2>Helpful Resources:<a href={activity.link} className={style.ActivityLink}>Click For More</a></h2>
                <h2>Participants: {activity.participants}</h2>
                <h2>Key: {activity.key}</h2>
                <button className={style.ActivityBtn} onClick={() => setActivity(!activity)}>More Activities!</button>
            </div>
     </section>
    </div>
    );
}

export default Activity;