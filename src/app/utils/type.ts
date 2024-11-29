import { ReactNode } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface LoginFormValues {
  username?:string;
  name?:string;
  email: string;
  password: string;
}


export interface InputFieldProps {
  placeholder?: string;
  name: keyof LoginFormValues;
  type: string;
  required?: boolean | string;
  errors?: FieldErrors<LoginFormValues> | undefined;
  message?: string;
  value?: string | RegExp;
  maxLength?: number;
  minLength?: number;
  maxMessage?: string;
  minMessage?: string | undefined;
  isDisabled?: boolean;
  className?: string; 
  handleclick?: () => void; 
  checked?: boolean; 
  register: UseFormRegister<LoginFormValues>; 
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

