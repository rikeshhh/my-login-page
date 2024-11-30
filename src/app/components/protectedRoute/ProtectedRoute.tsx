"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import useAuth from "@/app/hooks/useAuth";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { user, loading } = useAuth();
    console.log(user,"user empty?")
    const router = useRouter();
  
    useEffect(() => {
      if (!loading) {
        if (!user) {
          router.push("/auth/login");
        }else{
          router.push("/")
        }
      }
    }, [user, loading, router]);
  
    if (loading) {
      return <div>Loading...</div>; // Or a more sophisticated loading component
    }
  
    return user ? <>{children}</> : null;
  }
  