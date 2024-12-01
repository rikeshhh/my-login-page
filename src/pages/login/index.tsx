"use client";
import { AuthError, signInWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { LoginFormValues } from "@/app/utils/type";
import { notifyError, notifySuccess } from "@/app/components/toast/Toast";
import { Label } from "@/app/components/label/Label";
import { auth } from "@/app/lib/firebase/config";
import { EyeClosedIcon, EyeOpenIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { Loader } from "@/app/components/loader/Loader";
import Button from "@/app/components/button/Button";
import CustomToastContainer from "@/app/components/toast/ToastContainer";
import InputField from "@/app/components/input/InputField";
import Model from "@/app/components/model/Model";

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(userCredential);
      notifySuccess("Logged in successfully");
      router.push("/");

      reset();
    } catch (error: unknown) {
      if (error instanceof Error) {
        const authError = error as AuthError;
        switch (authError.code) {
          case "auth/invalid-credential":
            notifyError("Invalid email or password");
            break;
          case "auth/user-not-found":
            notifyError("No user found with this email");
            break;
          case "auth/wrong-password":
            notifyError("Incorrect password");
            break;
          default:
            notifyError("Login failed. Please try again.");
        }
      }
      console.error("Login Error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className=" min-h-screen grid py-12  container p-12 font-josefin rounded-3xl md:w-1/3 text-foreground">
      {isLoading && <Loader />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-end items-start  gap-6 "
      >
        <div className="flex flex-col justify-center items-center gap-2 mt-4 w-full">
          <Image
            src="/tribali/TriBali_Logo_Web.png"
            width={100}
            height={100}
            alt="logo"
          />
          <h2 className="text-4xl font-semibold text-center md:text-4xl">
            Welcome to tribali
          </h2>
          <InstagramLogoIcon />
        </div>
        <div className="w-full">
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
        <div className="w-full relative">
          <Label text="Password" htmlFor="password" className="text-lg  py-4" />
          <InputField
            name="password"
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
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            {...register("rememberMe")}
            className="h-2 w-2 bg-transparent"
          />
          <Label text="Remember Me" htmlFor="rememberMe" className="text-lg" />
        </div>
        <div className="w-full">
          <Button text={isLoading ? "loggin in ..." : "log in "} />
          <div className="flex flex-col justify-center items-center py-4">
            <p className="text-sm font-medium">Dont have an account?</p>
            <Link href="/auth/signup">
              <span className="text-sm font-bold underline">Signup</span>
            </Link>
          </div>
        </div>
        <CustomToastContainer />
      </form>
    </section>
  );
}
