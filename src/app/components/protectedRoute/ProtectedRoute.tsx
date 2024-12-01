"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import useAuth from "@/app/hooks/useAuth";

import { Loader } from "../loader/Loader";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.push("/"); 
      }
    }
  }, [user, loading, router]);

  if (loading) {
    return <Loader />; 
  }

  return user ? null : <>{children}</>;
}
