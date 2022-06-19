import React from "react";
import { Routes, Route } from "react-router-dom";
import { Cart } from "../pages/Cart";
import { Finish } from "../pages/Finish";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Product } from "../pages/Product";
import { Registration } from "../pages/Registration";


export function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/finish' element={<Finish/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/registration' element={<Registration/>}/>
        </Routes>
    )
}