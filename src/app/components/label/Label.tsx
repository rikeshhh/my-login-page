import { LabelProps } from "@/app/utils/type";

export const Label: React.FC<LabelProps> = ({ text, htmlFor, ...rest  }) => (
  <label htmlFor={htmlFor} {...rest}>{text}:</label>
);
