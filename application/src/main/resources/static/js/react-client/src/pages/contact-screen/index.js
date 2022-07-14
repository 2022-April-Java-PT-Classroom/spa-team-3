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
      <h2 className={style.header}>Contact Us</h2>
      <FormPage onEnteringComment={addContacInfo}/>
    </div>
  )  
}
export default ContactScreen;