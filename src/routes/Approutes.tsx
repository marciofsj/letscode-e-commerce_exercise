import React from "react";
import { Routes, Route } from "react-router-dom";
import { CartPage } from "../pages/CartPage";
import { FinishPage } from "../pages/FinishPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";


export function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/finish' element={<FinishPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/product' element={<ProductPage/>}/>
        </Routes>
    )
}