"use client";

import Image from "next/image";

import { InstagramLogoIcon } from "@radix-ui/react-icons";
import useLogout from "@/app/hooks/useLogout";

export default function Dashboard() {
  const { logout } = useLogout();


  return (
    <section className="dashboard bg-tribali-image-3 bg-cover bg-no-repeat font-josefin h-screen flex justify-center items-center">
       <div className="flex flex-col justify-center items-center gap-2 mt-4">
      <Image
            src="/tribali/TriBali_Logo_Web.png"
            width={100}
            height={100}
            alt="logo"
          />
          <h2 className="text-3xl font-semibold text-center md:text-4xl">Coming Soon</h2>
         <InstagramLogoIcon/>
      </div>
      <button
        onClick={logout}
        className="mt-4 px-4 py-2 bg-transparent border-foreground text-white rounded"
      >
        Logout
      </button>
    </section>
  );
}
