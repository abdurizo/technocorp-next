import styles from "./Button.module.css";
import cn from "classnames";

function Button({ text, onClick, active }) {
  return (
    <button
      className={cn(styles.button, active && styles.active)}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
