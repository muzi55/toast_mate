export type ToastType = "success" | "error";

export type ToastPosition = "left-top" | "center-top" | "right-top" | "bottom-left" | "bottom-center" | "bottom-right";

export interface ToastItem {
  message: string;
  type: ToastType;
}
