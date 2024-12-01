"use client";

import Dashboard from "@/pages/dashboard/page";

import CustomToastContainer from "./components/toast/ToastContainer";
import { ProtectedRoute } from "./components/protectedRoute/ProtectedRoute";

export default function Home() {
  return (
    <ProtectedRoute>
      <section className="grid grid-cols-1 justify-center h-screen bg-neutral-950 text-white">
        <Dashboard />
        <CustomToastContainer />
      </section>
    </ProtectedRoute>
  );
}
