import { Routes, Route } from "react-router-dom";

import Login from "./Login/index"
import Registration from "./Registration/index"
import Habits from "./Habits/index"

export default function RoutesFun(){

    return(
        <Routes>

            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Registration />} />
            <Route path="/habitos" element={<Habits />} />

        </Routes>
    )
    
}