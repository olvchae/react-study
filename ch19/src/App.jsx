import { Route, Routes, useLocation, useNavigate, useParams, useSearchParams } from "react-router";

//path
function Page1() {

    // const params = useParams();
    // const {name, age } = params;
    const { name, age } = useParams();

    const navigate = useNavigate();

    // navigate 사용 시 상태를 객체로 넘길 수 있음
    const handleOnClick = () => {
        navigate("/p3/data", {
            state: {
                usename: "test",
                password: "1234",
            }
        });
    }

    const handleBackOnclick = () => {
        navigate(-1);  // 이전 페이지로 돌아가기 
    }

    return <>
        페이지1
        <div>{name}</div>
        <div>{age}</div>
        <button onClick={handleOnClick}>page3 이동</button>
        <button onClick={handleBackOnclick}>뒤로가기</button>
    </>
}

//search
function Page2() {
    const [ searchParams, setsearchParams ] = useSearchParams();

    console.log(searchParams.get("name"));
    console.log(searchParams.get("age"));
    console.log(searchParams.getAll("num"));  //key값 여러 개 

    const name = searchParams.get("name");
    const age = searchParams.get("age");
    const nums = searchParams.getAll("num");

    return <>
        페이지2
        <div>{name}</div>
        <div>{age}</div>
        {nums.map(n => <div>{n}</div>)}
    </>
}

function Page3() {

    const location = useLocation();
    console.log(location);
    const { pathname } = location;
    console.log(pathname);

    return <>
        페이지3

    </>
}

function App() {
    // 라우터 데이터 전달
    // path param   =>  /경로/변수
    // search param    =>   /경로?키=값  

    return (
        <>
            <Routes>
                <Route path="/" element={<></>} />
                <Route path="/p1/:name/:age" element={<Page1 />} />
                <Route path="/p2" element={<Page2 />} />
                <Route path="/p3/data" element={<Page3 />} />
            </Routes>
        </>
    )
}

export default App;