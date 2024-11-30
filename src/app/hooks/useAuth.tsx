"use client";

import { onAuthStateChanged, User } from "firebase/auth";
import { useRouter, usePathname } from "next/navigation"; 
import { useEffect, useState } from "react"; 

import { auth } from "../lib/firebase/config";

const useAuth = () => { 
  const [user, setUser] = useState<User | null>(null); 
  const [loading, setLoading] = useState(true); 
  const router = useRouter();
  const pathname = usePathname();
 
  useEffect(() => { 
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => { 
      setUser(currentUser); 
      setLoading(false); 
      
      if (currentUser) {
        if (pathname === "/auth/login" || pathname === "/auth/signup") {
          router.push("/");  
        }
      } else {
        if (pathname === "/") {
          router.push("/auth/login");  
        }
      }
    }); 
 
    return () => unsubscribe(); 
  }, [router, pathname]); 
 
  return { user, loading }; 
}; 
 
export default useAuth;