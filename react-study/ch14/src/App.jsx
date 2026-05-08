import { css } from '@emotion/react'
import { useState } from 'react'
import * as s from './style';

function App() {
  const [ show, setShow ] = useState(false);
  const b = 'black';

  const box = css`
    height: 100px;
    background-color: ${b};
  `

  const box2 = (isShow) => {
    return css`
    width: 100px;
    height: 100px;
    background-color: blue;
    opacity: ${isShow ? '1' : '0'};
    `;
  }

  const box3 = (isShow) => css`
    width: 100px;
    height: 100px;
    background-color: blue;
    opacity: ${isShow ? '1' : '0'};
    `;
  }

  return (
    <>
      <div css={box}></div>
      <button onClick={() => {setShow(!show)}}>{show ? '숨기기' : '보이기'}</button>
      <div css={box2(show)}></div>
      <div css={box3(show)}></div>
      <div css={s.box4}></div>
      <div css={s.box5}></div>
    </>
  )

export default App
