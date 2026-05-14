import { useState } from "react";
import * as s from "./styles";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

function PasswordInput({title, name, value, onChange}) {
    const [ type, setType ] = useState("password");

    const handleHiddenOnClick = () => {
        setType(type === "password" ? "text" : "password");
    }

    return (
        <div>
            <label css={s.label}>
                <div>{title}</div>
                <input type={type} name={name} value={value} onChange={onChange} />
                <div css={s.hidden} onClick={handleHiddenOnClick}>
                    {
                        type === "password"
                        ? <IoEyeOutline />
                        : <IoEyeOffOutline />
                    }
                </div>
            </label>
        </div>
    )
}

export default PasswordInput;