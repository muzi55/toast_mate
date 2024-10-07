import React from "react";
import styles from "./Toast.module.css";
import type { IToastProps } from "../assets/type";

const toastTypeStyles = {
  success: styles.toastSuccess,
  error: styles.toastError,
};

const Toast = ({ type, message }: IToastProps) => {
  return <div className={`${styles.toastItem} ${toastTypeStyles[type]}`}>{message}</div>;
};

export default Toast;
