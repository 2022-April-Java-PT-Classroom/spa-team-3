import React from "react";
import style from  './style.module.scss';

const FormPage = () => {
    return (
        <div>
         <form className={style.form}>
          <div className={style.control}>
           <label htmlFor='first-name'> First Name</label>
           <input type='text' required id='first-name' />
          </div>
          <div className={style.control}>
           <label htmlFor='last-name'>Last Name </label>
           <input type='text' required id='last-name'/>
          </div>
          <div className={style.control}>
           <lable htmlFor='email'>Email</lable>
           <input type='email' required id='email' />
          </div>
          <div className={style.control}>
           <lable htmlFor='phone'>Phone Number</lable>
           <input type='tel' required id='phone' />
          </div >
          <div className={style.control}>
            <label htmlFor='description'>Comments</label>
            <textarea id='description' required row='5'></textarea>
          </div>
          <div className={style.actions}>
              <button>submit</button>
          </div>
         </form>
        </div>
    );
}
export default FormPage;