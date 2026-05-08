import { useEffect, useState } from 'react'

function App() {
  // const [data, setData] = useState([1, 2, 3, 4, 5]);

  const [ currentId, setCurrentId ] = useState(0);
  const [ inputValue, setInputValue ] = useState("");
  const [data, setData] = useState([]);

  const handleAddOnClick = (e) => {
    setCurrentId(currentId + 1);  //set이 즉시 일어나지 않음
  }
  
  useEffect(() => {
    console.log("유즈이펙트 호출");
    if (currentId !== 0) {
      setData([...data, {id: currentId, num: inputValue}]);  //비동기적 실행: 뒤로 미루는 동작 (동기적 실행 : 순서대로 동작하는 것) 
    }
  }, [currentId])
  
  console.log(currentId);
  console.log(data);

  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button onClick={handleAddOnClick}>추가</button>
      <ul>
        {data.map((d, index) => <li key={d.id}>{d.num}</li>)}
      </ul>
    </>
  )
}

export default App
