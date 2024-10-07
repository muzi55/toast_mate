import type { ToastItem, ToastType } from "../assets/type";
import styles from "./Toast.module.css";

const toastType: Record<ToastType, string> = {
  success: "toast-success",
  error: "toast-error",
};

export default function Toast({ message, type }: ToastItem) {
  return <div className={`${styles["toast-Item"]} ${styles[toastType[type]]}`}>{message}</div>;
}
