import React from "react";
import { useHistory } from "react-router-dom";
import FormPage from "../form/form";
import style from "./style.module.scss";

const ContactScreen = ()=>{
  const history = useHistory();

  function addContacInfo(contactData){
    history.replace('/');

  }
  return (
    <div>
      <a href="https://github.com/cljenkinsjr/jackr-enterprises-site">JAC Enterprises</a><p>We are an organization that specializes in offering niche adventures dedicated to learning about Earth's various ecosystems and unique terrains. Our motto is, "Vincit Qui Se Vincit" which means, "He/she conquers who conquers him/herself."</p>
      <h2 className={style.header}>Contact Us</h2>
      <FormPage onEnteringComment={addContacInfo}/>
    </div>
  )  
}
export default ContactScreen;