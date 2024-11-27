const Model = {
    Email: {
      type: "email",
      required: "Please enter your email address",
      placeholder: "Enter your email address",
      maxLength: {
        value: 64,
        message: "Email must be less than 64 characters",
      },
      pattern: {
        value: /^[\w-]+(?:\.[\w-]+)*@(?!.*(?:\.[^.]+){2,})[\w-]+(?:\.[\w-]+)+$/,
        message: "Invalid Email. Please provide a valid email",
      },
    },
  
    Password: {
      type: "password",
      required: "Please enter your password",
      placeholder: "Enter your password",
      minLength: {
        value: 8,
        message:
          "Password must be at least 8 characters long, must include a capital and small letter and a numeric and special character",
      },
      maxLength: {
        value: 20,
        message: "Password must be less than 20 characters",
      },
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
        message:
          "Invalid password. Password must be at least 8 characters long, must include a capital and small letter and a numeric and special character",
      },
    },
    Checkbox: {
      type: "checkbox",
      required: "Checkbox must be checked",
      placeholder: "I agree to the terms and conditions",
    },
  };
  export default Model;