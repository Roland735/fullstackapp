"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function page() {
  const router = useRouter();

  const [data, setData] = useState("nothing");
  const logout = async () => {
    try {
      const response = await axios.get("api/users/logout");
      router.push("/login");
    } catch (error: any) {
      console.log(`Logout failed: ${error.message}`);
      toast.error(error.message);
    }
  };

  const getUserDatails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  };
  return (
    <div className="flex flex-col min-h-screen items-center justify-center space-y-4">
      <h1>Profile</h1>
      <h2>Profile page</h2>
      <h3>
        {data === "nothing" ? (
          "Nothing"
        ) : (
          <Link
            href={`/profile/${data}`}
            className=" bg-emerald-400 rounded-md p-2"
          >
            {data}
          </Link>
        )}
      </h3>
      <button className=" bg-emerald-500 px-5 py-2" onClick={logout}>
        Logout
      </button>
      <button className=" bg-emerald-800 px-5 py-2" onClick={getUserDatails}>
        Get user Details
      </button>
    </div>
  );
}

export default page;
