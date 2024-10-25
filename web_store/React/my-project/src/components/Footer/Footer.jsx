import React from "react";
import { Link } from "react-router-dom";
import styles from '../../styles/Footer.module.css';
import { ROUTES } from "../../utils/routes";
 import  LOGO from "../../images/Logo.svg";
const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                 <img src={LOGO} alt="Logo"/>
                </Link>
            </div>
        </section>
    )
};
export default Footer;