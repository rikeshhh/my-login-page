import { UseFormRegister } from "react-hook-form";

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<any>;
  name: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export interface LabelProps {
  text: string;
  className: string;
  htmlFor: string;
}

export interface LoginFormValues {
  email: string;
  password: string;
}
