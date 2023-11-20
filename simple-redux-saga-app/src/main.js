import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Home from "./Home";
import React from 'react';
import Navigation  from './navigation'


const Main = () => {
    return(
        <div>
        <Navigation></Navigation>
        <Routes>
        <Route path ="/" exact Component = {Login} />
        <Route path ="/home" Component = {Home} />
        </Routes>
        </div>
       );

}
export default Main;