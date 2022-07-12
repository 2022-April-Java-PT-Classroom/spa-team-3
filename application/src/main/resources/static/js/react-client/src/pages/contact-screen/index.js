import React from "react";
import FormPage from "../form/form";
import style from "./style.module.scss";

const ContactScreen = ()=>{
  return (
    <div>
      <h2 className={style.header}>Contact Us</h2>
      <FormPage />
    </div>
  )  
}
export default ContactScreen;