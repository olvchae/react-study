import { Link, useNavigate } from "react-router";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import TextInput from "../../components/TextInput/TextInput";
import * as s from "./styles";
import { useState } from "react";

function Signin() {
    const navigate = useNavigate();

    const [ inputValues, setInputValues ] = useState({
        email: "test1234@gmail.com",
        password: "1q2w3e4r!",
    });

    const requestSignin = async (email, password) => {
        const users = JSON.parse(localStorage.getItem("users"));
        const foundUser = users.find(user => user.email === email && user.password === password);
        if(!foundUser) {
            throw {
                status: 401,
                data: "로그인 실패",
            };
        }
        return {
            status: 200,
            data: {
                accessToken: JSON.stringify({secret: "abcd1234", userId: foundUser.id}),
            } // 나중에 JWT로 대체
        }
    }

    const handleInputOnChange = (e) => {
        setInputValues((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })
    }

    const handleSigninOnClick = async () => {
        try{
            const response = await requestSignin(inputValues.email, inputValues.password);
            localStorage.setItem("accessToken", response.data.accessToken);
            navigate("/", {
                replace: true,
            });
        } catch(error) {
            alert(error.data);
        }


        // localStorage.setItem("loginUser", JSON.stringify(tempUser));  //localStorage는 항상 json 또는 문자열로 넣어야 함
        // const userJson = localStorage.getItem("loginUSer");
        // const user = JSON.parse(userJson);
        // console.log(user);
    }

    return (
        <>
            <div>
                <Link to={"/auth/signup"}>회원가입</Link>
                <TextInput title={"이메일"} name={"email"} value={inputValues.email} onChange={handleInputOnChange}/>
                <PasswordInput title={"비밀번호"} name={"password"} value={inputValues.password} onChange={handleInputOnChange} />
                <button onClick={handleSigninOnClick}>로그인</button>
            </div>
        </>
    )
}

export default Signin;