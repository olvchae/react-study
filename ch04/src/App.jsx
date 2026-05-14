import { useState } from 'react'

function App() {
    const [iText, setInText] = useState("");
    const [iText2, setInText2] = useState("");
    const [oText, setOutText] = useState("");
    const [oText2, setOutText2] = useState("");

    const handleOnclick = (e) => {

    }

    const handleOnChange = (e) => {

    }

    const handleOnChange2 = (e) => {

    }

    return (
        <>
            <input type="text" onChange={(e) => {setInText(e.target.value)}}/>
            <input type="text" onChange={(e) => {setInText2(e.target.value)}}/>
            <button onClick={(e) => {
                setOutText(iText);
                setOutText2(iText2);
                }}>출력</button>
            <h1>내용: {oText}</h1>
            <h1>내용2: {oText2}</h1>
        </>
    )
}

export default App
