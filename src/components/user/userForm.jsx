import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UserSignupForm from "./userSignuopForm";
import UserLoginForm from "./userLoginForm";
import styles from "../../styles/User.module.css";
import { toggleForm, toggleFormType } from "../../features/user/userSlice";

const UserForm = () => {
    const { showForm, formType } = useSelector(({ user }) => user);
    const dispatch = useDispatch();

    const closeForm = () => dispatch(toggleForm(false));
    const toggleCurrntFormType = (type) => dispatch(toggleFormType(type));

    return showForm ? (
        <>
            <div className={styles.overlay} onClick={closeForm} />
            {formType === 'signup' ? (
                <UserSignupForm
                    toggleCurrntFormType={toggleCurrntFormType}  // Передаем функцию
                    closeForm={closeForm}
                />
            ) : (
                <UserLoginForm
                    toggleCurrntFormType={toggleCurrntFormType}  // Передаем функцию
                    closeForm={closeForm}
                />
                
                
            )}
        </>
    ) : null;
};

export default UserForm;
