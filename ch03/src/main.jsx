import { createRoot } from 'react-dom/client'
import React, { useState } from 'react';

function App() {
    const [text, setText] = useState("");
    const [usernameText, setUsernameText] = useState("");
    const [passwordText, setPasswordText] = useState("");

    console.log(text);

    const handleOnChage = (e) => {
        setText(e.target.value);
    }


    return <>
        <input type="text" onChange={handleOnChage} value={text}/>
        <h1>출력: {text}</h1>


        <InputGroup setUsernameText={setUsernameText} setPasswordText={setPasswordText}/>
        <OutputGroup usernameText={usernameText} passwordText={passwordText}/>
    </>
}

function OutputGroup({usernameText, passwordText}) {
    return <div>
        <h1>사용자이름: {usernameText}</h1>
        <h1>비밀번호: {passwordText}</h1>
    </div>
}

function InputGroup({setUsernameText, setPasswordText}) {

    console.log("InputCroup 호출");
    return <div>
        <LableInput title={'사용자이름'} id={'username'} type={'text'} setText={setUsernameText}/>
        <LableInput title={'비밀번호'} id={'password'} type={'password'} setText={setPasswordText}/>
    </div>
}

function LableInput({title, id, type, setText}) {
    console.log("LabelInput 호출");

    const handleOnChage = (e) => {
        setText(e.target.value);
    }

    return <div>
        <label htmlFor={id}>{title}</label>
        <input type={type} id={id} onChange={handleOnChage}/>
    </div>
}

createRoot(document.getElementById('root')).render(
  <App />
)
