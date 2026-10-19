"use client";

import Link from "next/link";
import React, { useState } from "react";
const API_URL = "https://practice.amirm.me";

export default function SingupPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: userName, password: password }),
    });
    if (res.status === 201) {
      setMessage("succecfull✅");
    } else if (res.status === 409) {
      setMessage(" Username had alredy taken");
    } else if (res.status === 400) {
      setMessage("Username: 3-20 characters, password: at least 6");
    } else {
      setMessage(" problem  ");
    }
  };

  return (
    <div className="flex flex-col items-center mt-5 ">
      <form
        onSubmit={handleClick}
        className="flex flex-col border-4 border-black w-3xl items-center py-4 gap-3 bg-blue-600  "
      >
        <h1 className="text-4xl text-white font-bold py-5  ">Welome</h1>
        <input
          className="text-amber-100 border-2 rounded-4xl border-amber-500"
          type="text"
          placeholder=" Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <input
          className="text-amber-100 border-2 rounded-4xl border-amber-500 "
          type="password"
          placeholder=" Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button
          type="submit"
          className="border-2 border-amber-500 rounded-b-xl rotate-12 my-3 py-2 px-4 font-semibold text-amber-100"
        >
          Submite
        </button>
      </form>
      <p className="mt-4 font-semibold">
        Alredy have an account
        <Link
          className="text-cyan-800 font-bold border-2 border-cyan-800 rounded-4xl bg-green-400 px-3 py-2 mt-4"
          href="/login"
        >
          Login
        </Link>
      </p>

      <p className="font-extrabold text-4xl mt-3">{message}</p>
    </div>
  );
}
