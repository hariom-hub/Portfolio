import { Route } from "react-router";
import { Routes } from "react-router";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import App from "../App";

export const AppRoutes = ()=>{

     return (

          <Routes>
               <Route path = "/" element = {<App/>} />
               <Route path = "/home" element = {<App/>} />
               <Route path = "/about" element = {<About/>} />
               <Route path = "*" element = {<h1>Error 404 Not Found</h1>} />
          </Routes>
     )
}