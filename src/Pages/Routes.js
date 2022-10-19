import { Routes, Route } from "react-router-dom";

import Login from "./Login/index"
import Registration from "./Registration/index"
import Today from "./Today/index"
import Habits from "./Habits/index"
import Historic from "./Historic/index"

export default function RoutesFun(){

    return(
        <Routes>

            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Registration />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/habitos" element={<Habits />} />
            <Route path="/historico" element={<Historic />} />

        </Routes>
    )
    
}