
"use client";

import { useEffect, useState } from "react";

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

  return (
    <div className="relative h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex justify-start items-end h-full">
      {children}
      </div>
    </div>
  );
}
