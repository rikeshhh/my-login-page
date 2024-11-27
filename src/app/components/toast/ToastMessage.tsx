const ToastMessage: React.FC<{ Message: string; title: string }> = ({ Message, title }) => {
    return (
      <div>
        <strong>{title}</strong>
        <p>{Message}</p>
      </div>
    );
  };
  
export default ToastMessage;
  