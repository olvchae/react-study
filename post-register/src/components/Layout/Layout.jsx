import { Link, useLocation } from "react-router";
import * as s from "./styles";

function Layout({children}) {

    const {pathname} = useLocation();

    return (
        <>
            <div css={s.layout}>
                <div css={s.container(pathname.startsWith("/auth/") ? "none" : "full")}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout;