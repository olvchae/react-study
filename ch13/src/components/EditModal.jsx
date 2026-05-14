import { useInput } from "../hooks/inputs";
import Modal from 'react-modal';
Modal.setAppElement("#root");

function EditModal({isOpen, onClose, users, setUsers, editUserId}) {
  const { inputValues, isValid, handleInputOnChange } = useInput({initValue: users.find(user => user.id === editUserId)});

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

export default EditModal;