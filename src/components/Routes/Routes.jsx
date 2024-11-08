import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import {ROUTES} from '../../utils/routes'
import SingleProduct from "../Products/SIngleProducts";
import Profile from "../Profile/Profile";  
import SingleCategory from "../Categories/SingleCategories";
import CART from "../Cart/Cart";

const AppRoutes = () =>(
        <Routes>
            <Route index element={<Home />}/>
            <Route path={ROUTES.PRODUCT} element={<SingleProduct /> }/>
            <Route path={ROUTES.PROFILE} element={<Profile /> }/>
            <Route path={ROUTES.CATEGORY} element={<SingleCategory/> }/>
            <Route path={ROUTES.CART} element={<CART/> }/>
        </Routes>
        );
  
export default AppRoutes;