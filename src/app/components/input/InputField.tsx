import React from "react";

import { InputFieldProps } from "../../utils/type";

const InputField: React.FC<InputFieldProps> = ({ register, name, type = "text", ...rest }) => {
  return <input type={type} {...register(name)} {...rest} />;
};

export default InputField;