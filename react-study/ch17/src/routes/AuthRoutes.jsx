import { Route, Routes } from "react-router";
import Login from "../Pages/Login/Login";
import Join from "../Pages/Join/Join";


function AuthRoutes() {

    return (
        <>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/join' element={<Join />} />
              <Route path='*' element={<>404</>} />
            </Routes>
        </>
    )
}

export default AuthRoutes;