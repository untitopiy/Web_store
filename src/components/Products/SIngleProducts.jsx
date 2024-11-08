import React, { useEffect } from "react";
import {useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../features/api/apiSlice";

import {ROUTES} from  '../../utils/routes';
import Product from "./Product";
import Products from "./Products";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedPoducts } from "../../features/products/productsSlice";
const SingleProduct =()=> {
  const dispatch =useDispatch();
    const {id}=useParams();
    const navigate =useNavigate();
    const {list, related} = useSelector(({products})=>products)
//перемещает на главную страницу в случае если не загрузилась карточка товара
   const {data, isLoading,isFeatching,isSuccess}= useGetProductQuery({id});
   
    useEffect(()=>{
        if(!isFeatching&& !isLoading && !isSuccess) {
            navigate(ROUTES.HOME)
        }
    },[isLoading,isFeatching,isSuccess,navigate])

useEffect(() =>{
  if(!data || list.length) return;
  if (data)
  {
    dispatch(getRelatedPoducts(data.category.id))
  }
  }, [data,dispatch, list.length]);
    return !data ?(
      <section className="proloader"> Loading...</section>
    ):( <>
            <Product {...data} />
            <Products  products={related} amount ={5} title="Related products"/>
        </>
    
    )
    

};
export  default SingleProduct;

