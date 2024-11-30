import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

import { auth } from "../lib/firebase/config";

const useLogout = () => {
  const router = useRouter();

  const logout = async () => {
    try {
      await signOut(auth);
      router.push("/auth/login"); 
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return { logout };
};

export default useLogout;
