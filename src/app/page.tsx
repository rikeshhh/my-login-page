"use client";

import Login from "@/pages/login";
import Signup from "@/pages/signup";

export default function Home() {
  return (
    <div className="grid grid-cols-2">
    <Login/>
  <Signup/>
    </div>
  );
}
