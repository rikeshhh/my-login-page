import { ToastContainer as ReactToastContainer } from "react-toastify";

const CustomToastContainer = () => {
  return (
    <ReactToastContainer
      position="bottom-right"
      hideProgressBar={true}
      newestOnTop={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      stacked
    />
  );
};

export default CustomToastContainer;