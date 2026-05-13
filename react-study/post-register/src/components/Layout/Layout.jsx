import { Link } from "react-router";
import * as s from "./styles";

function Layout({children}) {

    return (
        <>
            <div css={s.layout}>
                <div css={s.container}>
                    {children}
                    
                </div>
            </div>
        </>
    )
}

export default Layout;