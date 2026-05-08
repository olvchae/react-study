import { useState } from 'react'
import * as s from './style'

function App() {

  return (
    <>
      <div css={s.card}>
        <div css={s.inputBox}>
          <input type="text" placeholder='사용자 이름'/>
        </div>
        <div css={s.inputBox}>
          <input type="password" placeholder='비밀번호'/>
        </div>
        <div css={s.bttonBox}>
          <button disabled={false}>사용자 정보 등록</button>
        </div>
      </div>
    </>
  )
}

export default App
