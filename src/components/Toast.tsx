import styles from "./Toast.module.css";

import type { IToastProps } from "./type";

const toastTypeStyles = {
  success: "toast-success",
  error: "toast-error",
};

const Toast = ({ type, message }: IToastProps) => {
  return <div className={`${styles["toast-item"]} ${styles[toastTypeStyles[type]]}`}>{message}</div>;
};

export default Toast;
