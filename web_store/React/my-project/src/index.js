import React  from 'react';
import {createRoot, CreateRoot}     from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"
import App from "./components/App/App";
import  "./styles/index.css";
createRoot(document.getElementById("root")).render(
<BrowserRouter>
<App />
</BrowserRouter>
);
