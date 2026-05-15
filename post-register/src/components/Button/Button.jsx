import * as s from "./styles";

function Button({children, value, onClick}) {

  return (
      <button css={s.button} value={value} onClick={onClick}>
          {children}
      </button>
  )
}

export default Button