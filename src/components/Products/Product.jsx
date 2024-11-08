import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "../../styles/Product.module.css";

import { ROUTES } from "../../utils/routes";
import {addItemToCart} from "../../features/user/userSlice"


const Product =(item)=>{
    const {title,price,images,description} =item;
const [currentImage,setCUrrentImage] =useState();

const dispatch =useDispatch();

useEffect(()=>{
    if (!images.length) return;
    setCUrrentImage(images[0]);
},[images])

const addToCart =()=>
{
    dispatch(addItemToCart(item))
}

    return(
        <section className={styles.Product}>
        <div className={styles.images}>
            <div className={styles.current} 
                style={{backgroundImage: `url(${currentImage})`}}
            />
             <div className={styles["images.list"]}>
            {images.map((image,i)=>(
                <div
                key={i}
                className={styles.image}
                style={{backgroundImage: `url(${image})`}}
                onClick={()=>setCUrrentImage(image)}
                />
            ))}
        </div>    
        </div>
        <div className={styles.info}>
            <h1 className={styles.title}> {title}</h1>
            <div className={styles.price}> {price}   </div>
            <div className={styles.color}><span> Color:</span> </div>
            <div className={styles.list}>{price} </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
            <button onClick={addToCart} className={styles.add}>Add to cart</button>
            <button className={styles.favorite}>Add to favorites</button>
        </div>
        <div className={styles.bottom}>
        <div className={styles.purchase}> 19 people purchased</div>
        <Link to={ROUTES.HOME}> Return to store </Link>
        </div>
        </div>  
        </section>
    )
};
export default Product;