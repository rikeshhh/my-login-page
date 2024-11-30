"use client";

import AuthLayout from "./auth/layout";

export default function Home() {
  return (
    <section className="grid grid-cols-1 justify-center items-end h-screen bg-neutral-950">
     <AuthLayout/>
    </section>
  );
}
