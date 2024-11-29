import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

import Model from "@/app/components/model/Model";

import Button from "../../components/button/Button";
import InputField from "../../components/input/InputField";
import { Label } from "../../components/label/Label";
import { notifySuccess } from "../../components/toast/Toast";
import CustomToastContainer from "../../components/toast/ToastContainer";
import { LoginFormValues } from "../../utils/type";

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
            register={register}
            value={Model.Email.pattern.value}
            message={Model.Email.pattern.message}
            required={Model.Email.required}
            errors={errors}
            type={Model.Email.type}
            placeholder={Model.Email.placeholder}
            maxLength={Model.Email.maxLength.value}
            maxMessage={Model.Email.maxLength.message}
            className="w-full border p-4 rounded-lg"
          />
        </div>
        <div>
          <Label text="Password" htmlFor="password" className="text-lg  py-4" />
          <InputField
            name="password"
            register={register}
            value={Model.Password.pattern.value}
            message={Model.Password.pattern.message}
            required={Model.Password.required}
            errors={errors}
            type={Model.Password.type}
            placeholder={Model.Password.placeholder}
            minLength={Model.Password.minLength.value}
            minMessage={Model.Password.minLength.message}
            maxLength={Model.Password.maxLength.value}
            maxMessage={Model.Password.maxLength.message}
            className="w-full border p-4 rounded-lg"
          />
        </div>
        {/* <div>
          <InputField
            name="rememberMe"
            type="checkbox"
            register={register}
            placeholder="Enter your password"
            className="border p-4 "
          />
          <Label text="Remeber Me" htmlFor="rememberMe" className="px-4" />
        </div> */}
        <div className="login__btn">
          <Button
            text="Login"
          />
          <div className="flex flex-col justify-center items-center py-4">
            <p className="text-gray-400 text-sm font-medium">Dont have an account?</p>
            <Link href="/signup">
              <span className="text-blue-500 text-sm font-medium">Signup</span>
            </Link>
          </div>
        </div>
        <CustomToastContainer />
      </form>
    </section>
  );
}
