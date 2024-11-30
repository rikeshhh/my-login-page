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
      className={`${className} w-full p-4 flex justify-center  items-center gap-2 flex-shrink text-center font-medium rounded-lg cursor-pointer border-text-foreground border focus:bg-foreground text-white`}
      type={type}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {icon} {text}
    </button>
  );
};

export default Button;