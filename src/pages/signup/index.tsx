"use client";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Label } from "@/app/components/label/Label";
import { notifyError, notifySuccess } from "@/app/components/toast/Toast";
import { LoginFormValues } from "@/app/utils/type";
import { auth } from "@/app/lib/firebase/config";
import {
  EyeClosedIcon,
  EyeOpenIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import { Loader } from "@/app/components/loader/Loader";
import Button from "@/app/components/button/Button";
import CustomToastContainer from "@/app/components/toast/ToastContainer";
import InputField from "@/app/components/input/InputField";
import Model from "@/app/components/model/Model";

export default function Signup() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const onSubmit: SubmitHandler<LoginFormValues> = async ({
    email,
    password,
  }) => {
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      notifySuccess("Account created Succesfully");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/email-already-in-use":
            notifyError("Email is already registered");
            break;
          case "auth/invalid-email":
            notifyError("Invalid email address");
            break;
          case "auth/weak-password":
            notifyError("Password is too weak");
            break;
          default:
            notifyError("Failed to create account. Please try again.");
        }
      } else {
        notifyError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="grid p-8 min-h-screen  container font-josefin rounded-3xl md:w-1/3">
      {isLoading && <Loader />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-end mb-8 pb-12 gap-2  text-foreground"
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <Image
            src="/tribali/TriBali_Logo_Web.png"
            width={100}
            height={100}
            alt="logo"
          />
          <p className="text-sm font-bold">
            In the meantime follow us on Instagram,or find us at the market
            (Bondi adn Paddington) sign up to find out when we launch!
          </p>
          <Link href="#">
            <InstagramLogoIcon />
          </Link>
        </div>
        <div className="w-full gap-4 flex flex-col">
          <div className="form__input--section">
            <Label
              text="Username"
              htmlFor="email"
              className="text-lg md:py-4 font-bold"
            />
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
            <Label
              text="Email"
              htmlFor="email"
              className="text-lg md:py-4 font-bold"
            />
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
          <div className=" w-full relative">
            <Label
              text="Password"
              htmlFor="email"
              className="text-lg md:py-4 font-bold"
            />
            <InputField
              name="password"
              className="password-input__input--padding"
              register={register}
              value={Model.Password.pattern.value}
              message={Model.Password.pattern.message}
              required={Model.Password.required}
              errors={errors}
              type={isPasswordVisible ? "text" : "password"}
              placeholder={Model.Password.placeholder}
              minLength={Model.Password.minLength.value}
              minMessage={Model.Password.minLength.message}
              maxLength={Model.Password.maxLength.value}
              maxMessage={Model.Password.maxLength.message}
            />
            <span
              onClick={() => setIsPasswordVisible((prev) => !prev)}
              className="absolute top-1/2 right-4 transform  cursor-pointer text-gray-500 hover:text-gray-700"
            >
              {isPasswordVisible ? (
                <EyeOpenIcon width={20} height={20} />
              ) : (
                <EyeClosedIcon width={20} height={20} />
              )}
            </span>
          </div>
          <Button text="Signup" />
        </div>
        <CustomToastContainer />
      </form>
    </section>
  );
}
