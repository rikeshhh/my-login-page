import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

import { LoginFormValues } from "@/app/utils/type";
import { notifySuccess } from "@/app/components/toast/Toast";
import { Label } from "@/app/components/label/Label";
import Button from "@/app/components/button/Button";
import CustomToastContainer from "@/app/components/toast/ToastContainer";
import InputField from "@/app/components/input/InputField";
import Model from "@/app/components/model/Model";

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
    <section className=" h-screen grid  py-12 w-full container mx-auto font-unbounded rounded-3xl">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center md:p-16  gap-6 w-full"
      >
        <h2 className="font-bold md:text-6xl text-center">Sign In...</h2>
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
            maxLength={Model.Password.maxLength.value }
            maxMessage={Model.Password.maxLength.message}
            className="w-full border p-4 rounded-lg"
          />
        </div>
        <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          {...register("rememberMe")} 
          className="h-4 w-4"
        />
          <Label text="Remember Me" htmlFor="rememberMe" className="text-lg" />
        </div>
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
