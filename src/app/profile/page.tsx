"use client";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function page() {
  const router = useRouter();
  const logout = async () => {
    try {
      const response = await axios.get("api/users/logout");
      router.push("/login");
    } catch (error: any) {
      console.log(`Logout failed: ${error.message}`);
      toast.error(error.message);
    }
  };
  return (
    <div>
      <h1>Profile</h1>
      <h2>Profile page</h2>
      <button className=" bg-emerald-500 px-5 py-2" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default page;
