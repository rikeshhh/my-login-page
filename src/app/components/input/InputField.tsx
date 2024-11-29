import React from "react";

import { ErrorMessage } from "@hookform/error-message";

import { InputFieldProps } from "../../utils/type";

const InputField: React.FC<InputFieldProps> = ({ 
  placeholder,
  name,
  type,
  required,
  errors,
  message,
  value,
  maxLength,
  minLength,
  maxMessage,
  minMessage,
  isDisabled,
  register,
  className,
  handleclick,
  checked,
  }) => {
  const hasError = errors[name];
  return <>
  <input    onClick={handleclick}
  className={`${
    hasError ? "border-red-500" : ""
  } ${hasError && type == "radio" ? "input__radio" : ""} ${className} "w-full border p-4 rounded-lg"`}
  name={name}
  placeholder={placeholder}
  {...register(name, {
    required: required,
    pattern: {
      value: new RegExp(value),
      message: message,
    },
    minLength: !isDisabled && {
      value: minLength,
      message: minMessage,
    },
    maxLength: !isDisabled && {
      value: maxLength,
      message: maxMessage,
    },
  })}
  disabled={isDisabled}
  checked={checked} />
      <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) =>
            message && (
              <p className="text-red-500" key={type}>
                {message}
              </p>
            )
          }
        />
  </>;
};

export default InputField;