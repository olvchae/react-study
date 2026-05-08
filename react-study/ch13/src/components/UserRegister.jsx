import { useRef } from "react";
import { useInput } from "../hooks/inputs";

function UserRegister({users, setUsers}) {
    const initUser = {
        id: "",
        username: "",
        email: "",
      }

    const { inputValues, setInputValues, isValid, handleInputOnChange} = useInput({initValue: initUser});
    const currentId = useRef(0);

    const handleRegisterOnClick = () => {
        currentId.current += 1;

        const newUser = {
        ...inputValues,
        id: currentId.current,
        }

        setUsers([...users, newUser]);
        setInputValues(initUser);
    }
    return <>
        <div>
          <input type="text" name='username' value={inputValues.username} onChange={handleInputOnChange} placeholder='계정명'/>
          <input type="text" name='email' value={inputValues.email} onChange={handleInputOnChange} placeholder='이메일'/>
          <button disabled={!isValid} onClick={handleRegisterOnClick}>등록</button>
        </div>
    </>
}

export default UserRegister;