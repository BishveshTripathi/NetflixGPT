import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg_netflix"
        />
      </div>
      <form className="rounded w-3/12 absolute p-12 bg-black text-white my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-slate-800"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-slate-800"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-slate-800"
        ></input>
        <button className="p-4 my-4 bg-red-600 rounded w-full">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to netflix? Sign Up Now"
            : "Already registered,Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
