import React from "react";

import { ErrorMessage } from "@hookform/error-message";

import { InputFieldProps } from "../../utils/type";

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  name,
  type,
  required,
  errors,
  message = "",
  value,
  maxLength = 2,
  minLength = 2,
  maxMessage ="",
  minMessage ="",
  isDisabled,
  register,
  className,
  handleclick,
  checked,
}) => {
  const hasError = errors?.[name];  
  return (
    <>
      <input
      type={type}
        onClick={handleclick}
        className={`${hasError ? "border-red-500" : ""} ${
          hasError && type == "radio" ? "input__radio" : ""
        } ${className} w-full   rounded-lg bg-transparent text-foreground p-2 md:p-4  border`}
        placeholder={placeholder}
        {...register(name, {
          required: required,
          pattern: {
            value: new RegExp(value || ""),
            message: message,
          },
          minLength: {
            value: minLength,
            message: minMessage,
          },
          maxLength: {
            value: maxLength,
            message: maxMessage,
          },
        })}
        disabled={isDisabled}
        checked={checked}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) =>
          message && (
            <p className="text-red-500 font-semibold" key={type}>
              {message}
            </p>
          )
        }
      />
    </>
  );
};

export default InputField;
