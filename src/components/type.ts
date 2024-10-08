export type ToastType = "success" | "error";

export type ToastPosition = "left-top" | "center-top" | "right-top" | "bottom-left" | "bottom-center" | "bottom-right";

export interface ToastItem {
  message: string;
  type: ToastType;
}

export interface IToastProps {
  type: "success" | "error";
  message: string;
  duration?: number;
}

export interface IToastArray extends IToastProps {
  id: number;
}
