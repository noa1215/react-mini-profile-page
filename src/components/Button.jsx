import styles from "./Button.module.css";

function Button({ type }) {
  return (
    <button className={`${styles.button} ${styles[type] ?? ''}`}>
      Contact me
    </button>
  )
}

export default Button;
