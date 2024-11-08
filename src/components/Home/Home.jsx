import React, { useEffect } from "react";
import { filterByPrice } from "../../features/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";


const Home = () => {
  //Фильтер до 100 долларов из productSlice
  const dispatch =useDispatch();
  
  // const {
  //   products:{list,filtered},
  //   categories,
  // }=useSelector((state)=> state);
  const { list, filtered } = useSelector((state) => state.products);
const categories = useSelector((state) => state.categories);


useEffect(()=> {
  if(!list.length) return;
  dispatch(filterByPrice(100));
},[dispatch,list.length]);

  return (   
    <>
    <Poster />
    <Products  products={list} amount ={5} title="Trending do 100$"/>
    <Categories  products={categories.list} amount ={5} title="WOrth seeing"/>
    <Products  products={filtered} amount ={5} title="Trending"/>
    {/* <Banner/>  */}
    
  </> 
  );
};
export default Home;
