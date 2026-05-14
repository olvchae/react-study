import { useState } from 'react'

function App() {
    const [ value1, setValue1 ] = useState("");
    const [ value2, setValue2 ] = useState("");
    const [ value3, setValue3 ] = useState("");
    const [ value4, setValue4 ] = useState("");

    const handleOnChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        
        switch (e.target.name) {
            case "input1": 
                setValue1(e.target.value);
                break;
            case "input2": 
                setValue2(e.target.value);
                break;
            case "input3": 
                setValue3(e.target.value);
                break;
            case "input4": 
                setValue4(e.target.value);
                break;
        }
    }

    const [ inputValue, setInputValue ] = useState({
        input1: "",
        input2: "",
        input3: "",
        input4: "",
    });

    const handleOnChange2 = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        });

        setInputValue(newInputValue);
    }

    return (
        <>
            <input type="text" name="input1" value={value1} onChange={handleOnChange}/>
            <input type="text" name="input2" value={value2} onChange={handleOnChange}/>
            <input type="text" name="input3" value={value3} onChange={handleOnChange}/>
            <input type="text" name="input4" value={value4} onChange={handleOnChange}/>


            <h1>출력1: {value1}</h1>
            <h1>출력2: {value2}</h1>
            <h1>출력3: {value3}</h1>
            <h1>출력4: {value4}</h1>

            <hr />

            <input type="text" name="input1" value={inputValue.value1} onChange={handleOnChange2}/>
            <input type="text" name="input2" value={inputValue.value2} onChange={handleOnChange2}/>
            <input type="text" name="input3" value={inputValue.value3} onChange={handleOnChange2}/>
            <input type="text" name="input4" value={inputValue.value4} onChange={handleOnChange2}/>


            <h1>출력1: {inputValue.input1}</h1>
            <h1>출력2: {inputValue.input2}</h1>
            <h1>출력3: {inputValue.input3}</h1>
            <h1>출력4: {inputValue.input4}</h1>

        </>
    )
}

export default App
