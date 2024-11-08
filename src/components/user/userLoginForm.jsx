import React, {useState} from "react";

import styles from "../../styles/User.module.css";
import close from "../../images/close.png"
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/user/userSlice";

const UserSignupForm = ({toggleCurrntFormType,closeForm}) => {
   const    dispatch = useDispatch();
    const [values, setvalues] =useState({

        email: "",
        password:"",


    });

    const handleChange =({target: {value,name}} )=>{
        setvalues({...values,[name]:value});
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        const isEmpty = Object.values(values).some(val=>!val)

        if(isEmpty) return;
        dispatch(loginUser(values));
        closeForm();
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.close} onClick={closeForm}>
               {/* Нужна картинка для закрытия */}
                {/* <svg className="icon">
                </svg> */}
                <div className={styles.icon} style={{backgroundImage:`url(${close})`}}/>    
            </div>
            <div className={styles.title}>
            Log In
         </div>
         <form className={styles.form} onSubmit={handleSubmit}>
            
            <div className={styles.group}>
        <input
         type="email" 
        placeholder="Your email" 
        name="email"
        value={values.email}
         autoComplete="off"
        onChange={handleChange}
        required
        />        
            </div>
           
            <div className={styles.group}>
        <input type="password" 
        placeholder="Your password" 
         name="password"
         value={values.password}
          autoComplete="off"
        onChange={handleChange}
        required
        />        
            </div>
       
        <div onClick={() => toggleCurrntFormType("login")} className={styles.link}> Create an account
        <button type="submit" className={styles.submit}>
            Login
        </button>
        </div>
         </form>
        </div>
         
    );
    
};
export default UserSignupForm;