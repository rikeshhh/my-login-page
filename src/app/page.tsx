"use client";

import Dashboard from "@/pages/dashboard/page";

import CustomToastContainer from "./components/toast/ToastContainer";

export default function Home() {
  return (
    <section className="grid grid-cols-1 justify-center h-screen bg-neutral-950 text-white">
       <Dashboard />
       <CustomToastContainer/>
    </section>
  );
}
