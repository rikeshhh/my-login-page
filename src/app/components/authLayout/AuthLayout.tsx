
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import useAuth from "@/app/hooks/useAuth";

import { Loader } from "../loader/Loader";
import { ProtectedRoute } from "../protectedRoute/ProtectedRoute";
import CustomToastContainer from "../toast/ToastContainer";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const images = [
    "/tribali/Tribali_website_comingsoon1.png",
    "/tribali/Tribali_website_comingsoon2.png",
    "/tribali/Tribali_website_comingsoon3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const { user, loading } = useAuth();
  const router = useRouter();


  useEffect(() => {
    if (!loading && user) {
      router.push("/");
    }
  }, [user, loading, router]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative min-h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed transition-all duration-1000 ease-in-out h-full"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex justify-start items-end h-screen ">
      {children}
      <CustomToastContainer/>
      </div>
    </div>
  );
}
