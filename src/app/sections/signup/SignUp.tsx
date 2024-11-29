import { SubmitHandler, useForm } from "react-hook-form";

import { Label } from "@/app/components/label/Label";
import { LoginFormValues } from "@/app/utils/type";
import { notifySuccess } from "@/app/components/toast/Toast";
import Button from "@/app/components/button/Button";
import InputField from "@/app/components/input/InputField";
import Model from "@/app/components/model/Model";

export default function Signup(){
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
    return  <section className=" h-screen grid md:grid-cols-2 justify-center py-12 w-full container mx-auto font-unbounded rounded-3xl">
        <form
        className="flex flex-col justify-center md:p-16  gap-6"
        onSubmit={handleSubmit(onSubmit)}
            >
              <h2 className="text-2xl text-center font-semibold">Signup</h2>
              <div className="flex flex-col gap-4">
                <div className="form__input--section">
                  <Label text="Name" htmlFor="Name" className="text-lg py-4"/>
                  <InputField
                    name="name"
                    register={register}
                    required={Model.Name.required}
                    value={Model.Name.pattern.value}
                    message={Model.Name.pattern.message}
                    errors={errors}
                    type={Model.Name.type}
                    placeholder={Model.Name.placeholder}
                    minLength={Model.Name.minLength.value}
                    minMessage={Model.Name.minLength.message}
                    maxLength={Model.Name.maxLength.value}
                    maxMessage={Model.Name.maxLength.message}
                  />
                </div>
                <div className="form__input--section">
                  <Label text="Username" htmlFor="email" className="text-lg py-4"/>
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
                  <Label text="Email" htmlFor="email" className="text-lg py-4"/>
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
                <div className="form__input--section form__input--section__password">
                  <Label text="Password" htmlFor="email" className="text-lg py-4"/>
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
                  >
                  </InputField>
                </div>
                <Button
                  text="Signup"
                  value="submit"
                  />
              </div>
            </form>
    </section>
}