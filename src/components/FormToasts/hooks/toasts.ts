import { ToastVariant } from "@/components/FormToasts";
import { useState } from "react";

export const useToasts = () => {
  const [toastVariant, setToastVariant] = useState<ToastVariant>("danger");
  const [showToast, setShowToast] = useState(false);

  return {
    toastVariant,
    setToastVariant,
    showToast,
    setShowToast,
  };
};
