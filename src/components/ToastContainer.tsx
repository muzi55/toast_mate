import { useEffect, useState } from "react";

import Toast from "./Toast";
import styles from "./Toast.module.css";

import { subscribe } from "./toastManager";
import type { IToastArray, ToastPosition } from "./type";

const toastPositionClass = {
  "left-top": styles["left-top"],
  "center-top": styles["center-top"],
  "right-top": styles["right-top"],
  "bottom-left": styles["bottom-left"],
  "bottom-center": styles["bottom-center"],
  "bottom-right": styles["bottom-right"],
};

const ToastContainer = ({ position = "right-top" }: { position?: ToastPosition }) => {
  const [toasts, setToasts] = useState<IToastArray[]>([]);

  useEffect(() => {
    const unsubscribe = subscribe(setToasts);
    return () => unsubscribe();
  }, []);

  return (
    <div className={`${styles["toast-parent"]} ${toastPositionClass[position]}`}>
      {toasts.map((toast) => (
        <Toast key={toast.id} type={toast.type} message={toast.message} />
      ))}
    </div>
  );
};

export default ToastContainer;
