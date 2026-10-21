"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RadioGroupChoiceCard } from "../Radioform";

const API_URL = "https://practice.amirm.me";

const ProfilePage = () => {
  const router = useRouter();
  const [user, setUser] = useState<{ username: string } | null>(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
    const getUser = async () => {
      const res = await fetch(`${API_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setUser(data);
      } else {
        localStorage.removeItem("token");
        router.push("/login");
      }
    };
    getUser();
  }, [router]);
  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_URL}/auth/logout`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    });
    localStorage.removeItem("token");
    router.push("/login");
  };

  if (!user) {
    return <p className="text-center mt-5">Loading...</p>;
  }
  return (
    <div className="flex flex-col items-center mt-6">
      <h1 className="text-4xl font-bold">Hello {user.username} </h1>
      <RadioGroupChoiceCard></RadioGroupChoiceCard>
      <button
        className="border-2 border-black backdrop-blur-3xl bg-red-500 px-4 py-2 rounded-3xl font-semibold hover:cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
