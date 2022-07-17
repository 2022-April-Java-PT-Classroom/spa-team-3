import React from "react";
import { useHistory } from "react-router-dom";
import FormPage from "../form/form";
import style from "./style.module.scss";
import CompanyImage from "../../assets/company.jpg"

const ContactScreen = ()=>{
  const history = useHistory();

  function addContacInfo(contactData){
    history.replace('/');
  }

  return (
    <div className={style.aboutPage}>
      <section className={style.aboutSection}>
        <div className={style.aboutGridImg}>
          <img src={CompanyImage}></img>
        </div>
        <div className={style.aboutGridText}>
          <h2>JAC Enterprises</h2>
          <p>Founded in 2019 by a group of wild and crazy individuals for a tremendous love for the great outdoors and the many adventures the Earth has to offer. These fab people chose to start guiding friends, family, and co-workers on the many adventures that they had experienced over their many years. And due to the number of requests for guiding, Jac was born.</p>
          <a href="/jackr-enterprises-site-main/index.html">Learn More</a>
        </div>
      </section>

      <section className={style.aboutFormSection}>
        <div className={style.aboutFormContain}>
        <h2>Contact JAC</h2>
        <FormPage onEnteringComment={addContacInfo}/>
        </div>
      </section>
    </div>
  )  
};

export default ContactScreen;