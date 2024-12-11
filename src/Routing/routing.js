import React from 'react'
import Home from '../component/Home';
import About from '../component/About';
import Products from '../component/Products';
import Contact from '../component/Contact';
import Entrance from '../component/Entrance';
import { createBrowserRouter } from 'react-router-dom';
const Routing = createBrowserRouter([
    {path:"",element:<Entrance></Entrance>},
    {path:"/home",element:<Home></Home>},
    {path:"/about",element:<About></About>},
    {path:"/products",element:<Products></Products>},
    {path:"/contact",element:<Contact></Contact>}
])

export default Routing;