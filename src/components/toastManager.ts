import { IToastArray, IToastProps } from "../assets/type";

let toasts: IToastArray[] = [];
let listeners: ((toasts: IToastArray[]) => void)[] = [];

export const addToast = (
  toast: (IToastProps & { duration?: number }) | string = { type: "success", message: "", duration: 3000 }
) => {
  let toastWithDefaults: IToastProps & { duration?: number };

  if (typeof toast === "string") {
    toastWithDefaults = { type: "success", message: toast, duration: 3000 };
  } else {
    toastWithDefaults = {
      type: toast.type || "success",
      message: toast.message || "",
      duration: toast.duration || 2000,
    };
  }

  const toastWithId: IToastArray = {
    ...toastWithDefaults,
    id: Date.now(),
  };

  toasts.push(toastWithId);
  listeners.forEach((listener) => listener([...toasts]));

  if (toastWithId.duration) {
    setTimeout(() => {
      toasts = toasts.filter((t) => t.id !== toastWithId.id);
      listeners.forEach((listener) => listener([...toasts]));
    }, toastWithId.duration);
  }
};

export const subscribe = (listener: (toasts: IToastArray[]) => void) => {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
};
