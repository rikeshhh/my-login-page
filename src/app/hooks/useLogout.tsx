import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

import {notifySuccess } from "../components/toast/Toast";
import { auth } from "../lib/firebase/config";

const useLogout = () => {
  const router = useRouter();

  const logout = async () => {
    try {
      await signOut(auth);
      notifySuccess("Logged out")
      router.push("/auth/login"); 
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return { logout };
};

export default useLogout;
