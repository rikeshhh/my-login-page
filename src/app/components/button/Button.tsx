import { ButtonProps } from "@/app/utils/type";

const Button: React.FC<ButtonProps> = ({
  text,
  className = "",
  type = "submit",
  handleClick,
  icon,
  isDisabled = false,
}) => {
  return (
    <button
      className={`${className} w-full md:p-4 p-2 flex justify-center  items-center gap-2 flex-shrink text-center font-medium rounded-lg cursor-pointer border-text-foreground border text-foreground`}
      type={type}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {icon} {text}
    </button>
  );
};

export default Button;