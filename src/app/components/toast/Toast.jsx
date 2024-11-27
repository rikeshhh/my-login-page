import { toast } from "react-toastify";

import "./ToastMessage"
import ToastMessage from "./ToastMessage";

const Success = "Success";
const Error = "Error";

export function notifySuccess(successMessage) {
  toast.success(<ToastMessage Message={successMessage} title={Success} />, {
    position: "bottom-right",
    className: "border-green-300 border-4",
  });
}

export function notifyError(errorMessage) {
  toast.error(<ToastMessage Message={errorMessage} title={Error} />, {
    position: "bottom-right",
    className: "border-red-500 border-4",
  });
}