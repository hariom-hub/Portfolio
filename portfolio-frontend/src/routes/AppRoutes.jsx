import { Route } from "react-router";
import { Routes } from "react-router";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Projects } from "../pages/Projects";
import App from "../App";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export const AppRoutes = () => {

     return (

          <Routes>
               <Route path="/" element={<App />} />
               <Route path="/home" element={<App />} />
               {/* <Route path = "/about" element = {<About/>} />
               <Route path = "/contact" element = {<Contact/> } />
               <Route path = "/projects" element = {<Projects/>} /> */}
               <Route path="*" element={<div className="h-screen flex items-center justify-center">
                    <h1 className="text-3xl font-bold">
                         Error!! 404 not found. <u><a href="/home">Return home <ArrowOutwardIcon fontSize="large"/></a></u>
                    </h1>
                     
               </div>
          
          } />
          </Routes>
     )
}