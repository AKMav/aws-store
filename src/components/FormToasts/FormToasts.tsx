import { Toast, ToastContainer } from "react-bootstrap";
import { IProps } from "./types";

export const FormToasts = ({
  showToast,
  toastVariant,
  setShowToast,
  delay = 5000,
}: IProps) => {
  return (
    <ToastContainer className="p-4" position="top-end">
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        bg={toastVariant}
        delay={delay}
        autohide
      >
        <Toast.Header closeButton>
          <strong className="me-auto">
            {(toastVariant === "danger" && "Error") ||
              (toastVariant === "success" && "Success")}
          </strong>
        </Toast.Header>
        <Toast.Body className={"text-white"}>
          {(toastVariant === "danger" && "Fill all required fields") ||
            (toastVariant === "success" && "Form successful submitted")}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
