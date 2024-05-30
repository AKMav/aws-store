export type ToastVariant = "danger" | "success" | "info";

export interface IProps {
  showToast: boolean;
  setShowToast: (payload: boolean) => void;
  toastVariant: ToastVariant;
  delay?: number;
}
