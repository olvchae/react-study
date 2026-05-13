import { IoPencil } from "react-icons/io5";
import * as s from "./styles";
import { LuPencil } from "react-icons/lu";

function AuthLayout({children}) {

    return (
        <div css={s.layout}>
            <div css={s.left}>
                <div css={s.title}><IoPencil />게시글 미니 프로젝트</div>
                <div css={s.description}>
                    <span>생각을 글로,</span>
                    <span>글을 세상에</span>
                </div>
                <div css={s.description2}>
                    <span>지금 바로 가입하고</span>
                    <span>나만의 게시글을 작성해 보세요.</span>
                </div>
            </div>
            <div css={s.right}>
                <header>
                    <h1><LuPencil /> PostLab</h1>
                </header>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout;