import React from "react";
import { Link } from "react-router-dom";
import styles from '../../styles/Header.module.css';
import { ROUTES } from "../../utils/routes";
 import  LOGO from "../../images/Logo.svg";
 import HEART from "../../images/Heart.svg";
 import CART from "../../images/Carts.svg";
//  import  AVATAR from "../../images/"
const Header = () => {
    return <div className={styles.header}>
        <div className={styles.logo}>
            <Link to={ROUTES.HOME}>
            <img src={LOGO} alt="Logo"/>
            </Link>
        </div>
        <div className={styles.info}>
            <div className={styles.user}>
                {/* <div className={styles.avatar} style={{backgroundImage:`url(${AVATAR})`}}/>            */}
            
                <div className={styles.username}>Guest</div>
            </div>
            <form className= {styles.form}>
                <div className={styles.icon}> </div>
                <div className={styles.input}>
                    <input type="search" name="search"
                    placeholder="Search for anything..."
                    autoCapitalize="off"
                    onChange={()=>{}}
                    value=""
                    />                    
                </div>
                <div className={styles.box}></div>
            </form>
            <div className={styles.account}>
            <Link to={ROUTES.HEART} className={styles.heart}>
                 <img src={HEART} alt="Heart"/> 
                
                </Link>
                <Link to={ROUTES.CART} className={styles.cart}>
                 <img src={CART} alt="CART"/> 
                <span className={styles.count}>2</span>
                </Link>
            </div>
        </div>
    </div>;
};
export default Header;