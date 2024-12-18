import React from "react";
import Home from './Home';
import Login from './Login';
import Logout from './Logout';
import Dashboard from './Dashboard'
import Register from "./register";
import {Routes,Route} from 'react-router-dom'
const App = ()=>{
    return (
        <div>
            <Routes>
                <Route path = "/" element={<Home/>}></Route>
                <Route path = "/login" element={<Login/>}></Route>
                <Route path = "/register" element={<Register/>}></Route>
                <Route path = "/dashboard" element={<Dashboard/>}></Route>
                <Route path = "/logout" element={<Logout/>}></Route>
                <Route path = "*" element={<h1>404 error page</h1>}></Route>
            </Routes>
        </div>
    )
}
export default App;