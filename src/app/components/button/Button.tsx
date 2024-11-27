import { ButtonProps } from "@/app/utils/type";

const Button: React.FC<ButtonProps> = ({ text, ...rest }) => (
  <button type="submit" {...rest}>
    {text}
  </button>
);

export default Button;
