import { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
Modal.setAppElement("#root");

function EditModal({isOpen, onClose, user, setUsers, editUserId}) {

  const [ inputValues, setInputValues ] = useState(users.find(user => user.id === editUserId));
  const [ isValid, setValid ] = useState(false);

  const REGEX = {
    username: /^[a-z]+[a-z0-9_-]{4,19}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  }

  useEffect(() => {
    const entries = Object.entries(inputValues);
    const ValidList = entries.filter(([key, value]) => {
      const regex = REGEX[key];
      if (!regex) return true;
      return regex.test(value);
    })

    setValid(ValidList.length === entries.length);

  }, [inputValues]);
  

  const handleInputOnChange = (e) => {
    const {name, value} = e.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    })
  }

  const handleOkOnClick = (e) => {

    setUsers(users.map(user => {
      if (user.id === editUserId) {
        return inputValues;
      }
      return user;
    }))

    onClose();
  }

  return <Modal isOpen={true} onRequestClose={onClose} style={{
    overlay: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000000aa",
    },

    content: {
      position: "static",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      width: "300px",
      height: "200px",
    }
  }}>
    <input type="text" name='username' value={inputValues.username} onChange={handleInputOnChange} placeholder='계정명'/>
    <input type="text" name='email' value={inputValues.email} onChange={handleInputOnChange} placeholder='이메일'/>
    <div>
      <button disabled={!isValid} onClick={handleOkOnClick}>확인</button>
      <button onClick={onClose}>닫기</button>
    </div>

  </Modal>
    
}

function App() {
  const initUser = {
    id: "",
    username: "",
    email: "",
  }

  const [ inputValues, setInputValues ] = useState(initUser);
  const [ users, setUsers ] = useState([]);
  const currentId = useRef(0);
  const [ isValid, setValid ] = useState(false);
  const [ modalOpen, setModalOpen ] = useState(false);
  const [ editModal, setEditModal ] = useState(<></>);
  const REGEX = { 
    username: /^[a-z]+[a-z0-9_-]{4,19}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  }

  useEffect(() => {
    const entries = Object.entries(inputValues);
    const ValidList = entries.filter(([key, value]) => {
      const regex = REGEX[key];
      if (!regex) return true;
      return regex.test(value);
    })

    setValid(ValidList.length === entries.length);

  }, [inputValues]);
  

  const handleInputOnChange = (e) => {
    const {name, value} = e.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    })
  }

  const handleRefisterOnClick = () => {
    currentId.current += 1;

    const newUser = {
      ...inputValues,
      id: currentId.current,
    }

    setUsers([...users, newUser]);
    setInputValues(initUser);
  }

  const handleEdiOnclick = (e) => {
    setEditModal(<EditModal isOpen={true} onClose={handleModalOnClose} users={users} setUSers={setUsers} editUserId={parseInt(e.target.value)} />)
    setModalOpen(true);
  }

  const handleModalOnClose = (e) => {
    setEditModal(<></>);
    setModalOpen(false);
  }

  const handleDeleteOnClick = (e) => {
    const userId = parseInt(e.target.value);
    setUsers(users.filter(user => user.id !== userId));
  }

  const thAndTdStyle = (width) => ({
    padding: "0px 10px",
    width,
    height: "30px",
    border: "1px solid #dbdbdb",
    textAlign: "center",
  })

  return (
    <>
      <div>
        <div>
          <input type="text" name='username' value={inputValues.username} onChange={handleInputOnChange} placeholder='계정명'/>
          <input type="text" name='email' value={inputValues.email} onChange={handleInputOnChange} placeholder='이메일'/>
          <button disabled={!isValid} onClick={handleRefisterOnClick}>등록</button>
        </div>
        <table style={{boxSizing: "border-box", border: "1px solid #dbdbdb", borderCollapse: "collapse"}}>
          <thead>
            <tr>
              <th style={thAndTdStyle()}>ID</th>
              <th style={thAndTdStyle("140px")}>USERNAME</th>
              <th style={thAndTdStyle("240px")}>E-MAIL</th>
              <th style={thAndTdStyle()}></th>
              <th style={thAndTdStyle()}></th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td style={thAndTdStyle()}>{user.id}</td>
                <td style={thAndTdStyle("140px")}>{user.username}</td>
                <td style={thAndTdStyle("240px")}>{user.email}</td>
                <td style={thAndTdStyle()}>{<button value={user.id} onClick={handleEdiOnclick}>수정</button>}</td>
                <td style={thAndTdStyle()}>{<button value={user.id} onClick={handleDeleteOnClick}>삭제</button>}</td>
              </tr>
            ))}
          </tbody>
        </table>
        { modalOpen && editModal }
      </div>
    </>
  )
}

export default App
