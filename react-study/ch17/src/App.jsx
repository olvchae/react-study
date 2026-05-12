import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home/Home'
import Join from './Pages/Join/Join'
import Login from './Pages/Login/Login'
import AuthRoutes from './routes/AuthRoutes'

function App() {
  
  // 서브라우트
  // 경로 그룹
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/*' element={<AuthRoutes />} />
        <Route path='/user/*' element={(
          <Routes>
            <Route path='/me' element={<>프로필</>} />
            <Route path='/password' element={<>비밀번호변경</>} />
            <Route path='*' element={<>404</>} />
          </ Routes>
        )} />
        <Route path='/product'>
          <Route path='about' element={<>상품소개 </>}/>
          <Route path='resource' element={<>상품자료</>} />
        </Route> 
        <Route path='*' element={<>404</>} />
      </Routes>
    </>
  )
}

export default App
