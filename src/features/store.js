import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from "./categories/categories.Slice";
import productsSlice from './products/productsSlice';
import { apiSlice } from './api/apiSlice';
import userSlice from "../features/user/userSlice"


export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    user: userSlice,
    [apiSlice.reducerPath]:apiSlice.reducer,
  },
  middleware:(getMiddleware)=> getMiddleware().concat(apiSlice.middleware),
  devTools: true,
});