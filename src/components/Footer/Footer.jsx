import React from "react";
import { Link } from "react-router-dom";
import styles from '../../styles/Footer.module.css';
import { ROUTES } from "../../utils/routes";
import  LOGO from "../../images/Logo.svg";
import  VK from "../../images/VK.svg";
import  FaceBook from "../../images/FaceBook.svg";
const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                 <img src={LOGO} alt="Logo"/>
                </Link>
            </div>
            <div className={styles.rights}>
            Developed by 
            <a href="" target="_blank" rel="noreferrer">
                Melnikov
            </a>
            </div>
            <div className={styles.socials}>
            {/* <a href="vk" target="_blank" rel="noreferrer"> </a> */}
            <img src={VK} alt="Вконтакте"/>
            {/* <a href="facebook" target="_blank" rel="noreferrer"> </a> */}
            <img src={FaceBook} alt="Файсбук"/>
            {/* <a href="" target="_blank" rel="noreferrer"> </a> */}
            </div>
        </section>
    )
};
export default Footer;