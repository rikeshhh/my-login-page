import { SubmitHandler, useForm } from "react-hook-form";

import Button from "../components/button/Button";
import InputField from "../components/input/InputField";
import { Label } from "../components/label/Label";
import { notifySuccess } from "../components/toast/Toast";
import CustomToastContainer from "../components/toast/ToastContainer";
import { LoginFormValues } from "../utils/type";

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    console.log(data);
    notifySuccess("Logged in successfully");
    reset();
  };
  return (
    <section className=" h-screen grid md:grid-cols-2 justify-center py-12 w-full container mx-auto font-unbounded rounded-3xl">
      <div className="bg-login-image bg-cover bg-center bg-no-repeat rounded-lg"></div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center md:p-16  gap-6"
      >
        <h2 className="font-bold md:text-6xl">Welcome back...</h2>
        <div>
          <Label text="Email" htmlFor="email" className="text-lg py-4" />
          <InputField
            name="email"
            type="email"
            register={register}
            placeholder="Enter your email"
            className="w-full border p-4 rounded-lg"
          />
          {errors.email && <p className="error">Email is required</p>}
        </div>
        <div>
          <Label text="Password" htmlFor="password" className="text-lg  py-4" />
          <InputField
            name="password"
            type="password"
            register={register}
            placeholder="Enter your password"
            className="w-full border p-4 rounded-lg"
          />
          {errors.password && <p className="error">Password is required</p>}
        </div>
        <div>
          <InputField
            name="rememberMe"
            type="checkbox"
            register={register}
            placeholder="Enter your password"
            className="border p-4 "
          />
          <Label text="Remeber Me" htmlFor="rememberMe" className="px-4" />
        </div>
        <Button
          text="Login"
          className="w-full border py-4 px-2 font-medium bg-blue-600 text-white rounded-lg"
        />
        <CustomToastContainer />
      </form>
    </section>
  );
}
