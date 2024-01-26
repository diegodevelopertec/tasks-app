import { Routes,Route } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Home from "../pages/Home"
import Tasks from "../pages/Tasks"

export default ()=>{
    return <Routes>
        <Route Component={Home} path=""  />
        <Route Component={Login} path="/login"  />
        <Route Component={Register} path="/register"  />
        <Route Component={Tasks} path="/tarefas"  />
    </Routes>
}