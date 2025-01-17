import style from "./Button.module.css";
function Button({ children, emoji, handleClick, type = "" }) {
  return (
    <button onClick={handleClick} style={style.button} className={type}>
      {emoji}
      {children}
    </button>
  );
}

export default Button;
