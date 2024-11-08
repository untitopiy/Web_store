import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from '../../styles/Header.module.css';
import { ROUTES } from "../../utils/routes";
import LOGO from "../../images/Logo.svg";
import HEART from "../../images/Heart.svg";
import CART from "../../images/Carts.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../../features/user/userSlice";
import AVATAR from "../../images/UserAva.png";
import { useGetProductsQuery } from "../../features/api/apiSlice";

const Header = () => {
  const [searchValue, setSearchValue]= useState("");
  const { currentUser, cart } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({ name: "Guest", avatar: AVATAR });

  const {data, isLoading}= useGetProductsQuery({title: searchValue});
  console.log(data);

  useEffect(() => {
    if (!currentUser) return;
    setValues(currentUser);
  }, [currentUser]);

  const handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true));
    else navigate(ROUTES.PROFILE);
  };
  const handleSearch=({target:{value}})=>{
    setSearchValue(value)
  }

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="Logo" />
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.user} onClick={handleClick}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${values.avatar})` }}
          />
          <div className={styles.username}>{values.name}</div>
        </div>
        <form className={styles.form}>
          <div className={styles.icon}> </div>
          <div className={styles.input}>
            <input
              type="search"
              name="search"
              placeholder="Search for anything..."
              autoCapitalize="off"
              onChange={handleSearch}
              value={searchValue}
            />
          </div>
            
          
          {searchValue && <div className={styles.box}>
            {isLoading ? 'Loading': !data.lenght ? "No results" :(
              data.map(({title,images,id}) => {
                return (
                  <Link className={styles.item} to={`/products/${id}`}>
                    <div className={styles.image} 
                    style={{backgroundImage:`url(${images[0]})` }}
                    />
                    <div className={styles.title}>
                      {title}
                    </div>
                  </Link>
                )
              })
            )}
            </div>}
        </form>
        <div className={styles.account}>
          <Link to={ROUTES.HEART} className={styles.heart}>
            <img src={HEART} alt="Heart" />
          </Link>
          <Link to={ROUTES.CART} className={styles.cart}>
            <img src={CART} alt="CART" />
            {!!cart.length &&(   <span className={styles.count}>{cart.length}</span> )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
