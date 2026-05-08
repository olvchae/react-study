import { useState } from 'react'

function App() {
  const [ user, setUser ] = useState({
    username: '', 
    email: '', 
    password: '', 
    phone: '',
  });

  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleOnClick = (e) => {
    console.log(user);
  }

  return (
    <>  
        <div>
          <label htmlFor="username">사용자 이름</label>
          <input type="text" name='username' value={user.username} id='username' onChange={handleOnChange}/>
        </div>
        <div>
          <label htmlFor="email">이메일</label>
          <input type="email" name='email' value={user.email} id='email' onChange={handleOnChange}/>
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input type="password" name='password' value={user.password} id='password' onChange={handleOnChange}/>
        </div>
        <div>
          <label htmlFor="phone">연락처</label>
          <input type="phone" name='phone' value={user.phone} id='phone' onChange={handleOnChange}/>
        </div>
        <button onClick={handleOnClick}>회원가입</button>
    </>
  )
}

export default App
