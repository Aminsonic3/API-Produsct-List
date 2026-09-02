import React from "react";

const Formname = () => {
    function form () {

    }
  return (
    <div className="bg-blue-300 mx-30 mt-10 rounded-b-full">
      <form className="flex flex-col items-center pt-4  ">
        <label htmlFor="name">Name</label>
        <br></br>
        <input
          className="placeholder:text-gray-400 text-center border-2 rounded-2xl "
          type="text"
          name="name"
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
          placeholder="Enter your password"
          required
        ></input>
        <br></br>
        <label htmlFor="phone number">Phone Number</label>
        <br></br>
        <input
          className="placeholder:text-gray-400 text-center border-2 rounded-2xl"
          type="text"
          name="phone number"
          placeholder="Enter your phone number"
          required
        ></input>
        <br></br>
      </form>
    </div>
  );
};

export default Formname;
