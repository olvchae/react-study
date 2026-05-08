import { use, useState } from 'react'
import { useFormState } from 'react-dom';

function App() {
    const [ currentPage, setCurrentPages ] = useState(<></>);
    const [ pages, setPages ] = useState({
        number: <Number />,
        table: <Table />,
        table2: <Table2 />,
    });

    const handlePageButtononClick = (e) => {
        setCurrentPages(pages[e.target.value]);
    }

       return (
        <>
           <header>
                <button value={"number"} onClick={handlePageButtononClick}>Number</button>
                <button value={"table"} onClick={handlePageButtononClick}>Table</button>
                <button value={"table2"} onClick={handlePageButtononClick}>Table2</button>
           </header>
           <main>
                {currentPage}
           </main>
        </>
    )
}

function Number() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const h1Numbers = numbers.map(n => <h1>{n}</h1>);
    return (
        <>
            {numbers}
            {h1Numbers}
            {numbers.map(n => <h1>{n}</h1>)}
        </>
    )
}

function Table() {
    const students = [
        {no: 1, name: "김은채", age: 22},
        {no: 2, name: "이은채", age: 23},
        {no: 3, name: "박은채", age: 24},
        {no: 4, name: "최은채", age: 25},
        {no: 5, name: "강은채", age: 26},
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map(students => 
                        <tr>
                            <td>{students.no}</td>
                            <td>{students.name}</td>
                            <td>{students.age}</td>
                        </tr>
                        )
                }
            </tbody>
        </table>
    )
}

function Table2() {
    const [ students, setStudents ] = useState([]);

    const [ values, setValues ] = useState({
        no: "",
        name: "",
        age: "",
    })

    const handleOnChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleAddOnClick = (e) => {
        setStudents([...students, {no: values.no, name: values.name, age: values.age}]);
    }
    //메모리 상태의 변화가 있어야 하므로 새로운 배열을 생성 

    return (
        <>  
            <input type="text" name='no' value={values.no} onChange={handleOnChange}/>
            <input type="text" name='name' value={values.name} onChange={handleOnChange}/>
            <input type="text" name='age' value={values.age} onChange={handleOnChange}/>
            <button onClick={handleAddOnClick}>추가</button>

            <table>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map(students => 
                        <tr>
                            <td>{students.no}</td>
                            <td>{students.name}</td>
                            <td>{students.age}</td>
                        </tr>
                        )
                }
            </tbody>
        </table>
        </>
    )
}

export default App
