import { Route, Routes, useLocation, useNavigate } from "react-router";
import Layout from "../components/Layout/Layout";
import AuthRoutes from "./AuthRoutes";
import { useAuthentication } from "../hooks/queries/useAuthentication";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import PostList from "../pages/PostList/PostList";
import PostRegister from "../pages/PostRegister/PostRegister";
import Menus from "../pages/Menus/Menus";


function RootRoutes() {
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const authenticationQuery = useAuthentication(localStorage.getItem("accessToken"));

    useEffect(() => {
        if (!authenticationQuery.isLoading) {
            const status = authenticationQuery.data.status;
            if (status !== 200 && !pathname.startsWith("/auth/")) {
                navigate("/auth/signin", {
                    replace: true,
                });
            }
            if (status === 200 && pathname.startsWith("/auth/")) {
                navigate("/", {
                    replace: true,
                });
            }
        }
    }, [authenticationQuery.isLoading]);

    return (
        <>
            {
                authenticationQuery.isLoading 
                ? <h1>로딩중</h1> 
                : <Routes>
                    <Route path="/" element={<PostList />} />
                    <Route path="/write" element={<PostRegister />} />
                    <Route path="/menus" element={<Menus />} />
                    <Route path="/auth/*" element={<AuthRoutes />} />
                    <Route path="*" element={<>페이지를 찾을 수 없습니다.</>} />
                </Routes>
            }
        </>
    )
}

export default RootRoutes;