import * as s from "./styles";

function TextInput({title, name, value, onChange}) {

    return (
        <div>
            <label css={s.label}>
                <div>{title}</div>
                <input type="text" name={name} value={value} onChange={onChange} />
            </label>
        </div>
    )
}

export default TextInput;