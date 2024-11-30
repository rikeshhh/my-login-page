"use client"
import { AuthError, signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { LoginFormValues } from "@/app/utils/type";
import { notifyError, notifySuccess } from "@/app/components/toast/Toast";
import { Label } from "@/app/components/label/Label";
import { auth } from "@/app/lib/firebase/config";
import Button from "@/app/components/button/Button";
import CustomToastContainer from "@/app/components/toast/ToastContainer";
import InputField from "@/app/components/input/InputField";
import Model from "@/app/components/model/Model";

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const onSubmit: SubmitHandler<LoginFormValues> = async(data) => {
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth, 
        data.email, 
        data.password
      );
      const user = userCredential.user;
      console.log('User logged in:', {
        uid: user.uid,
        email: user.email
      });
  
      notifySuccess("Logged in successfully");      
      router.push('/');
      
      reset();
    } catch (error: unknown) {
      if (error instanceof Error) {
        const authError = error as AuthError;
        switch (authError.code) {
          case 'auth/invalid-credential':
            notifyError("Invalid email or password");
            break;
          case 'auth/user-not-found':
            notifyError("No user found with this email");
            break;
          case 'auth/wrong-password':
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
    <section className=" h-screen grid py-12  container p-12 font-unbounded rounded-3xl w-1/3">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-end items-start  gap-6  text-neutral-500"
      >
        <h2 className="font-bold md:text-4xl text-center">Login..</h2>
        <div className="w-full">
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
        <div className="w-full">
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
        <div className="w-full">
          <Button text="Login" />
          <div className="flex flex-col justify-center items-center py-4">
            <p className="text-sm font-medium">
              Dont have an account?
            </p>
            <Link href="/auth/signup">
              <span className="text-sm font-medium">Signup</span>
            </Link>
          </div>
        </div>
        <CustomToastContainer />
      </form>
    </section>
  );
}
