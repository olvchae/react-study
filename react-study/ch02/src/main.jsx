import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/*
  JSX 문법 규칙 
  1. 꼭 하나의 묶음이어야 한다.
  2. 열었으면 닫아야 한다.
  3. 변수 또는 특정 값을 표현할 때 {}안에 작성한다.
*/

/**
 * 컴포넌트란?
 * 1. JSX를 리턴하는 함수 
 * 2. 모듈화(부품) -> 재사용의 목적, 코드 분리의 목적
 * 3. 매개변수는 properties(props)라는 객체 하나만 허용한다.
 * 4. 구조분해를 통해 props를 정의해 두면 호출하는 위치에서 자동완성을 사용할 수 있다.
 */

//속성을 객체로 표현할 수 있음
function PBox() {
  return <div>
    <CBox a = "김은채" b = "22" /> 
  </div>
}

const props = {
  a: "김은채",
  b: "22",
}

//바로 구조분해 가능np
function CBox({a, b}) {
  console.log(p);

  return <>
    <h1>김은채</h1>
    <h2>나이</h2>
  </>
}

createRoot(document.getElementById('root')).render(<PBox />)
