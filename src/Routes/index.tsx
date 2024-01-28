import { Routes,Route } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Home from "../pages/Home"
import Tasks from "../pages/Notes"
import Notes from "../pages/Notes"

export default ()=>{
    return <Routes>
        <Route Component={Home} path=""  />
        <Route Component={Login} path="/login"  />
        <Route Component={Register} path="/register"  />
        <Route Component={Notes} path="/anotações"  />
    </Routes>
}