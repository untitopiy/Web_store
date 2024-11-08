import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "../../styles/Profile.module.css";

import { updateUser } from "../../features/user/userSlice";

const Profile =() =>{
    const dispatch =useDispatch();
    const {currentUser} =useSelector(({user})=>user);
    const [values, setvalues] = useState({
        name: "",
        email: "",
        password: "",
        avatar: ""
    });

    useEffect(() => {
        if (!currentUser) return;
        setvalues(currentUser);
      }, [currentUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const isEmpty = Object.values(values).some(val => !val);

        if (isEmpty) return;
        dispatch(updateUser(values));
       
    };

    const handleChange = ({ target: { value, name } }) => {
        setvalues({ ...values, [name]: value });
    };

    return (
        <section className={styles.profile}>
            {!currentUser ? <span>You need to log  in</span> :(
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
                        <input
                            type="name"
                            placeholder="Your name"
                            name="name"
                            value={values.name}
                            autoComplete="off"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.group}>
                        <input
                            type="password"
                            placeholder="Your password"
                            name="password"
                            value={values.password}
                            autoComplete="off"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.group}>
                        <input
                            type="file"
                            placeholder="Your avatar"
                            name="avatar"
                            value={values.avatar}
                            autoComplete="off"
                            onChange={handleChange}
                            required
                        />
                    </div>
                  <button type="submit" className={styles.submit}>
                    Update
                  </button>
                </form>
           
            )}

        </section>
    )
};
export default Profile;