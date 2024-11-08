import React from "react";
import styles from "../../styles/Categories.module.css"
import { Link } from "react-router-dom";

const Categories =({title, products =[],amount})=>{ 
    const list = products.filter((_, i) => i < amount);
    return (
    <section className={styles.category}> 
<h2>{title}</h2> 
      
   <div className={styles.list}>
      {list.map(({id,name,image})=>(
       <Link to={`/categories/${id}`} key={id} className={styles.product}>
       <div className={styles.image} 
       style= {{backgroundImage: `url(${image})`}}
       />
      {/* <div className={styles.cat}>{cat}</div> */}
        <div className={styles.info}>

        </div>
       <h3 className={styles.title}>{name}</h3>
       </Link>
      ))}
   </div>
  
   
        

       </section>
    );
   };
   
export default Categories ;