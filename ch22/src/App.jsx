import { useState } from "react";
import { Link, Route, Routes } from "react-router";

function P1() {
  const getPromise = () => {
    return new Promise((resolve, reject) => {
      console.log(1);
      resolve("1번리턴");
    })
  }

  const getPromise2 = (value) => {
    return new Promise((resolve, reject) => {
      console.log("2번쨰" + value);
      resolve(value);
    })
  }

  const handleOnClick = () => {
    getPromise()
    .then((value) => {
      console.log(value + "출력");
      getPromise2(value)
      .then((value2) => {
        console.log(value2 + "출력");
      })
    })
  }

  return <>
    <button onClick={handleOnClick}>클릭</button>
  </>
}

function P2() {
  const getPromise = async () => {
    console.log(1);
    return "1번 데이터 리턴";
  }

  const getPromise2 = async (value) => {
    console.log(value + " 받음");
    return value + "!!!!";
  }

  const handleOnClick = async () => {  //async는 혼자있을 수 있음, 그런데 await을 달려고 하면, async가 있어야 하고 async 함수 안에서 await 쓸 수 있음
    const returnValue = await getPromise();
    const returnValue2 = await getPromise2(returnValue);
    console.log(returnValue2);
    console.log("!!!!!");
  }

  return <>
    <button onClick={handleOnClick}>클릭</button>
  </>
}

function P3() {

  const handleOnClick = async () => {
    const reponse = await fetch();
    console.log("응답데이터 써먹기");
  }

  return <>
    <button onClick={handleOnClick}>요청</button>
  </>
}

function P4() {

  const getPromise = async (open) => {
    if (open) {
      return "열림";
    } else {
      throw new Error("열 수 없음");
    }
  }

  const handleOnClick = async () => {
    let returnValue = null;
    try {
      returnValue = await getPromise(false);
    } catch(error){
      returnValue = error;
    }
    console.log("결과: " + returnValue);
  }

  return <>
    <button onClick={handleOnClick}>클릭</button>
  </>
}

function P5() {

  const getPromise = async (flag) => {
    if(flag) {
      return 10;
    } else {
      throw new Error("오류!");
    }
  }

  const handleOnClick = () => {
    getPromise(true)
    .then((value) => {
      console.log("결과1: " + value);
      return value * value;
    }).then((value) => {
      console.log("결과2: " + value);
      return value * value;
    }).then((value) => {
      console.log("결과3: " + value);
    }).catch((error) => {
      console.error(error);
    });

    getPromise(false)
    .then((value) => {
      console.log("결과1: " + value);
      return value * value;
    }).then((value) => {
      console.log("결과2: " + value);
      return value * value;
    }).then((value) => {
      console.log("결과3: " + value);
    }).catch((error) => {
      console.error(error);
    });
  }

  return <>
    <button onClick={handleOnClick}>클릭</button>
  </>
}

function P6() {

  const [ arr, setArr ] = useState([]);

  const getPromise1 = () => {

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("A");
      }, 2000);
    });
  }

  const getPromise2 = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("B");
      }, 1000);
    });
  }

  const getPromise3 = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("C");
      }, 4000);
    });
  }

  const handleOnClick = async () => {
    const result = await Promise.all([getPromise1(), getPromise2(), getPromise3()]);
    setArr(result);
  }

  return <>
    <h1>{arr}</h1>
    <button onClick={handleOnClick}>클릭</button>
  </>
}

function App() {

    return (
        <>
          <Link to={"/p1"}>promise1</Link>
          <Link to={"/p2"}>promise2</Link>
          <Link to={"/p3"}>promise3</Link>
          <Link to={"/p4"}>promise4</Link>
          <Link to={"/p5"}>promise5</Link>
          <Link to={"/p6"}>promise6</Link>

          <Routes>
            <Route path="/p1" element={<P1 />} />
            <Route path="/p2" element={<P2 />} />
            <Route path="/p3" element={<P3 />} />
            <Route path="/p4" element={<P4 />} />
            <Route path="/p5" element={<P5 />} />
            <Route path="/p6" element={<P6 />} />
          </Routes>
        </>
    )
}

export default App;