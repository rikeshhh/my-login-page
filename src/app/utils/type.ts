import { ReactNode } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface InputFieldProps {
  placeholder?: string;
  name: string;
  type: string;
  required?: boolean | string;
  errors?: FieldErrors<any>;
  message?: string;
  value?: string;
  maxLength?: number;
  minLength?: number;
  maxMessage?: string;
  minMessage?: string;
  isDisabled?: boolean;
  className?: string; 
  handleclick?: () => void; 
  checked?: boolean; 
  register: UseFormRegister<any>; 
}

export interface ButtonProps {
  text: string; 
  className?: string; 
  type?: "button" | "submit" | "reset"; 
  handleClick?: () => void; 
  icon?: ReactNode; 
  isDisabled?: boolean; 
}

export interface LabelProps {
  text: string;
  className: string;
  htmlFor: string;
}

