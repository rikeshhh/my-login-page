import { SubmitHandler, useForm } from "react-hook-form";

import { Label } from "@/app/components/label/Label";
import { notifySuccess } from "@/app/components/toast/Toast";
import { LoginFormValues } from "@/app/utils/type";
import Button from "@/app/components/button/Button";
import InputField from "@/app/components/input/InputField";
import Model from "@/app/components/model/Model";

export default function Signup() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    console.log(data);
    notifySuccess("Account created Succesfully");
    reset();
  };
  return (
    <section className=" h-screen grid py-12  container p-12 font-unbounded rounded-3xl w-1/3">
      <form
       onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-end   gap-2  text-neutral-500"
      >
        <h2 className="font-bold md:text-4xl text-center">Signup</h2>
        <div className="w-full gap-4 flex flex-col">

          <div className="form__input--section">
            <Label text="Username" htmlFor="email" className="text-lg py-4" />
            <InputField
              name="username"
              register={register}
              required={Model.Username.required}
              value={Model.Username.pattern.value}
              message={Model.Username.pattern.message}
              errors={errors}
              type={Model.Username.type}
              placeholder={Model.Username.placeholder}
              minLength={Model.Username.minLength.value}
              minMessage={Model.Username.minLength.message}
              maxLength={Model.Username.maxLength.value}
              maxMessage={Model.Username.maxLength.message}
            />
          </div>
          <div className="form__input--section">
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
            />
          </div>
          <div className="form__input--section">
            <Label text="Password" htmlFor="email" className="text-lg py-4" />
            <InputField
              name="password"
              className="password-input__input--padding"
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
            ></InputField>
          </div>
          <Button text="Signup" />
        </div>
      </form>
    </section>
  );
}
