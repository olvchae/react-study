import { useState } from "react";
import { Link, Route, Routes } from "react-router";

function P1() {
    const getPromise = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("안녕하세요!");
            }, 1000)
        })
    }

    const handleOnClick = () => {
        getPromise()
        .then((value) => {
            console.log("출력: " + value );
        })
    }
    return (
        <>
            <button onClick={handleOnClick}>클릭</button>
        </>
    )
}

function P2() {
    const checkPositive = (num) => {
        return new Promise((resolve, reject) => {
            if(num > 0) {
                resolve("양수입니다: " + num);
            } else {
                reject("음수입니다: " + num);
            }
        });
    }

    const handleOnClick = () => {

        checkPositive(5).then(msg => console.log(msg));   // "양수입니다: 5"
        checkPositive(-3).catch(err => console.log(err));  // "음수입니다: -3"
    }

    return <>
        <button onClick={handleOnClick}>클릭</button>
    </>
}

function P3() {

    const getPromise = () => {
        return new Promise((resolve) => {
            resolve(10);
        })
    }

    const handleOnClick = () => {
        getPromise()
            .then(n => n * 2 )
            .then(n => n + 5 )
            .then(n => n.toString() + "원")
            .then(result => console.log(result));
    }
    return <>
        <button onClick={handleOnClick}>클릭</button>
    </>
}

function P4() {
    const getPromise = () => {
        return new Promise ((resolve) => {
            resolve("hello");
        })
    }

    const handleOnClick = () => {
        getPromise() 
        .then(str => str.toUpperCase())
        .then(str => {
            throw new Error("강제 에러 발생!");
        })
        .then(str => console.log("여기 실행될까?"))
        .catch((error) => console.error("에러 잡음: 강제 에러 발생!"))
        .finally(console.log("항상 실행!"))
        };
    return <>
        <button onClick={handleOnClick}>클릭</button>
    </>
}

function P5() {
    const fetchUser = (userId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userId <= 0) {
                    reject("유효하지 않은 ID");
                } else {
                    resolve({ id: userId, name: "유저" + userId, age: 20 + userId });
                }
            }, 1000);
        });
    }

    const handleOnClick = () => {
        fetchUser(3).then(user => console.log(user));
        // (1초 후) { id: 3, name: "유저3", age: 23 }

        fetchUser(-1).catch(err => console.log(err));
        // (1초 후) "유효하지 않은 ID"
    }

    return <>
        <button onClick={handleOnClick}>클릭</button>
    </>
}

function P6() {
    const [ arr, setArr ] = useState([]);

    const getPromise1 = () => {
        return new Promise(res => setTimeout(() => res("A 데이터"), 1000));
    }
    
    const getPromise2 = () => {
        return new Promise((res, rej) => setTimeout(() => rej("B 실패!"), 2000));
    }

    const getPromise3 = () => {
        return new Promise(res => setTimeout(() => res("C 데이터"), 1500));
    }

    const handleOnClcik = async () => {
        const result = await Promise
        .all([getPromise1(), getPromise2(), getPromise3()])
        .then(results => console.log(results))
        .catch(err => console.log(err));
        setArr(result);
    }

    return <>
        <h1>{arr}</h1>
        <button onClick={handleOnClcik}>클릭</button>
    </>
}

function P7() {
   const fetchUser = async (userId) => {
        return setTimeout(() => {
                    if (userId <= 0) {
                        console.error("유효하지 않은 ID");
                    } else {
                        console.log({ id: userId, name: "유저" + userId, age: 20 + userId });
                    }
                }, 1000);
        };
    

    const handleOnClick = async () => {
        const returnValue = await fetchUser(3);
        console.log(returnValue);
        // (1초 후) { id: 3, name: "유저3", age: 23 }
        const returnValue2 = await fetchUser(-1);
        console.log(returnValue2);
        // (1초 후) "유효하지 않은 ID"
    }

    return <>
        <button onClick={handleOnClick}>클릭</button>
    </>
}

function P8() {
    const fetchUser = async (userId) => {
        return setTimeout(() => {
                    if (userId <= 0) {
                        throw new Error("유효하지 않은 ID");
                    } else {
                        console.log("완료");
                    }
                }, 1000);
        };

    const handleOnClick = async () => {
        let returnValue = null;
        try {
            returnValue = fetchUser(3);
        } catch (error) {
            returnValue = error;
        }
        console.log(returnValue);
    }

    return <>
        <button onClick={handleOnClick}>클릭</button>
    </>
}

function P9() {
    const sequential = async () => {
        const a = await fetchA();  // 1초
        const b = await fetchB();  // 2초
        const c = await fetchC();  // 1.5초
        console.log(a, b, c);
    }
    // 총 소요 시간: _2_초 (각각 걸리는 시간 만큼만 걸리기 때문)

    const parallel = async () => {
        const [a, b, c] = await Promise.all([fetchA(), fetchB(), fetchC()]);
        console.log(a, b, c);
    }
    // 총 소요 시간: _4.5__초 (배열로 모든 값을 동시에 보여주기 떄문에 총 합한 시간이 소요됨)
}

function P10() {
    const getUser = async (id) => {
        return {
            id: id,
            name:  `유저${id}`,
        }
    }

    const fetchAllUsers = async (ids) => {
        const users = [];
        
        for(const id of ids) {
            const user = await getUser(id);
            users.push(user);
        }
        return users;
    }

    const handleOnClick = async () => {
        // fetchAllUsers([1, 2, 3]).then(users => console.log(users));
        const result = await fetchAllUsers([1, 2, 3]);
        console.log(result);
    }

    return <>
        <button onClick={handleOnClick}>클릭</button>
    </>
}

function P11() {
    const getUser = async (id) => {
        return {
            id: id,
            name:  `유저${id}`,
        }
    }

    const fetchAllUsers = async (ids) => {
        const users = await Promise.all(ids.map(id => getUser(id)));
        return users;
    }
    
    const handleOnClick = async () => {
        // fetchAllUsers([1, 2, 3]).then(users => console.log(users));
        const result = await fetchAllUsers([1, 2, 3]);
        console.log(result);
    }

    return <>
        <button onClick={handleOnClick}>클릭</button>
    </>
}

function P12() {
    const getData = async () => {
        return "Hello";
    }

    const handleOnClick = () => {
        const reulst = getData();
        console.log(reulst); // 객체리턴
        getData().then(data => console.log(data));  //값 리턴
    }

    return <>
        <button onClick={handleOnClick}>클릭</button>
    </>
}

function P13() {
    
    const getUsers = async () => {
        const reponse = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await reponse.json();
        const names = data.map(user => user.name);
        console.log(names);
    }
    
    const handleOnClick = () => {
        getUsers();
    }

    return <>
        <button onClick={handleOnClick}>click</button>
    </>
}

function P14() {

    
}

function App() {
    
    return (
        <> 
            <Link to={"/p1"}>P1</Link>
            <Link to={"/p2"}>P2</Link>
            <Link to={"/p3"}>P3</Link>
            <Link to={"/p4"}>P4</Link>
            <Link to={"/p5"}>P5</Link>
            <Link to={"/p6"}>P6</Link>
            <Link to={"/p7"}>P7</Link>
            <Link to={"/p8"}>P8</Link>
            <Link to={"/p9"}>P9</Link>
            <Link to={"/p10"}>P10</Link>
            <Link to={"/p11"}>P11</Link>
            <Link to={"/p12"}>P12</Link>
            <Link to={"/p13"}>P13</Link>
            <Link to={"/p14"}>P14</Link>

            <Routes>
                <Route path="/p1" element={<P1 /> } />
                <Route path="/p2" element={<P2 /> } />
                <Route path="/p3" element={<P3 /> } />
                <Route path="/p4" element={<P4 /> } />
                <Route path="/p5" element={<P5 /> } />
                <Route path="/p6" element={<P6 /> } />
                <Route path="/p7" element={<P7 /> } />
                <Route path="/p8" element={<P8 /> } />
                <Route path="/p9" element={<P9 /> } />
                <Route path="/p10" element={<P10 /> } />
                <Route path="/p11" element={<P11 /> } />
                <Route path="/p12" element={<P12 /> } />
                <Route path="/p13" element={<P13 /> } />
                <Route path="/p14" element={<P14 /> } />
            </Routes>
        </>
    )
}

export default App;