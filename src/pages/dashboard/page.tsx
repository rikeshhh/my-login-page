"use client";

import Image from "next/image";

import { InstagramLogoIcon } from "@radix-ui/react-icons";
import Button from "@/app/components/button/Button";
import useLogout from "@/app/hooks/useLogout";

export default function Dashboard() {
  const { logout } = useLogout();


  return (
    <section className="dashboard bg-tribali-image-3 bg-cover bg-no-repeat font-josefin h-screen flex flex-col justify-start p-12 text-foreground">
       <div className="flex flex-col justify-center items-center gap-2 mt-12 md:w-1/4 border p-12 rounded-lg">
      <Image
            src="/tribali/TriBali_Logo_Web.png"
            width={100}
            height={100}
            alt="logo"
          />
          <h2 className="text-3xl font-semibold text-center md:text-4xl">Coming Soon</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta magnam, assumenda, non in quos alias maxime debitis necessitatibus odit aperiam repellat omnis quae voluptatibus magni sunt aspernatur, nostrum facilis voluptate!</p>
         <InstagramLogoIcon/>
     <Button text="logout" handleClick={logout}/>
      </div>
    </section>
  );
}
