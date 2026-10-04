"use client";
import React from "react";
import { useState } from "react";
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";

const Formname = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    phonenumber: "",
  });
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleSubmite() {
    if (form.name === "") {
      alert("please enter your name");
    } else if (!form.email.includes("@")) {
      alert("your email is not correct");
    } else if (Number(form.age) < 18) {
      alert("you must be at least 18 years old");
    } else if (
      form.password.length < 8 ||
      !/[A-Z]/.test(form.password) ||
      !/[0-9]/.test(form.password)
    ) {
      alert(
        "your password is less than 8 and must include an uppercase letter and a number"
      );
    } else if (form.phonenumber.length !== 11) {
      alert("your phone number is not correct");
    } else {
      alert("Everything is Okay");
    }
  }

  return (
    <div className=" flex flex-col items-center bg-blue-300 mx-30 mt-10 rounded-b-full">
      <Progress value={56} className="w-full max-w-sm flex pt-3">
        <ProgressLabel>Upload progress</ProgressLabel>
        <ProgressValue />
      </Progress>
      <form
        onSubmit={handleSubmite}
        className="flex flex-col items-center pt-4  "
      >
        <label htmlFor="name">Name</label>
        <br></br>
        <input
          className="placeholder:text-gray-400 text-center border-2 rounded-2xl "
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        ></input>
        <br></br>
        <label htmlFor="email">Email</label>
        <br></br>
        <input
          className="placeholder:text-gray-400 text-center border-2 rounded-2xl"
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        ></input>
        <br></br>
        <label htmlFor="age">Age</label>
        <br></br>
        <input
          className="placeholder:text-gray-400 text-center border-2 rounded-2xl"
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Enter your age"
          required
        ></input>
        <br></br>
        <label htmlFor="password">Password</label>
        <br></br>
        <input
          className="placeholder:text-gray-400 text-center border-2 rounded-2xl"
          type="text"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        ></input>
        <br></br>
        <label htmlFor="phonenumber">Phone Number</label>
        <br></br>
        <input
          className="placeholder:text-gray-400 text-center border-2 rounded-2xl"
          type="text"
          name="phonenumber"
          value={form.phonenumber}
          onChange={handleChange}
          placeholder="Enter your phonenumber"
          required
        ></input>
        <br></br>
        <div>
          <button
            type="submit"
            className=" text-4xl text-blue-800 mb-10 mx-100 px-2 py-2 border rounded-4xl bg-yellow-400 hover:text-blue-300 hover:bg-green-500 "
          >
            SUBMITE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formname;
