"use client";

import useLogout from "@/app/hooks/useLogout";

export default function Dashboard() {
  const { logout } = useLogout();


  return (
    <div>
      <h1>Dashboard Content</h1>
      <button
        onClick={logout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
}
